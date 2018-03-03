class Relation
  attr_reader :results

  def initialize(model_object, query_params = nil)
    @model_object = model_object
    @query_params = query_params || {}
    @results = nil
  end

  def where(params)
    query_params.merge(params)
  end

  def resolve!
    raise "Already resolved" if results
    self.results = model_object.where(query_params)
  end

  def data
    results || resolve!
  end

  def method_missing(name, *args)
    super unless Array.instance_methods.include?(name)
    resolve!.send(name, *args)
  end

  private
  attr_writer :results
  attr_reader :query_params
end
