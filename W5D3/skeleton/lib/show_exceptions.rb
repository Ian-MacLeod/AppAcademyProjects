require 'erb'

class ShowExceptions
  def initialize(app)
    @app = app
  end

  def call(env)
    begin
      app.call(env)
    rescue RuntimeError => e
      render_exception(e)
    end
  end

  private

  def render_exception(e)
    contents = File.read("lib/templates/rescue.html.erb")
    template = ERB.new(contents)
    template.result(binding)
    res.status = 500
    res.write(template)
    res.finish
  end
end
