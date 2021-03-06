class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max)
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    num > 0 && num < @store.length
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket =  get_bucket(num)
    bucket << num unless bucket.include?(num)
  end

  def remove(num)
    bucket = get_bucket(num)
    bucket.delete(num)
  end

  def include?(num)
    bucket = get_bucket(num)
    bucket.include?(num)
  end

  private

  def get_bucket(num)
    @store[num % num_buckets]
  end

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if count >= num_buckets
    bucket = self[num]
    unless bucket.include?(num)
      bucket << num
      @count += 1
    end
  end

  def remove(num)
    bucket = self[num]
    if bucket.include?(num)
      bucket.delete(num)
      @count -= 1
    end
  end

  def include?(num)
    bucket = self[num]
    bucket.include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    @store = Array.new(num_buckets * 2) { [] }
    @count = 0
    old_store.each do |bucket|
      bucket.each do |el|
        self.insert(el)
      end
    end
  end
end
