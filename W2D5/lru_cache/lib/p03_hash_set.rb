require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(object)
    resize! if count >= num_buckets
    bucket = self[object]
    unless bucket.include?(object)
      bucket << object
      @count += 1
    end
  end

  def remove(object)
    bucket = self[object]
    if bucket.include?(object)
      bucket.delete(object)
      @count -= 1
    end
  end

  def include?(object)
    bucket = self[object]
    bucket.include?(object)
  end

  private

  def [](object)
    @store[object.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
