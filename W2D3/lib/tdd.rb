

class Array

  def my_uniq

    result_arr = []

    self.each do |el|
      result_arr << el unless result_arr.include?(el)
    end

    result_arr

  end

  def two_sum

    results = []

    i = 0
    while i < self.length
      j = i + 1
      while j < self.length
        results << [i, j] if self[i] + self[j] == 0
        j += 1
      end
      i += 1
    end

    results
  end

  def my_transpose

    result_arr = Array.new(self.length) {[]}

    self.length.times do |i|
      self[i].length.times do |j|
        result_arr[j] << self[i][j]
      end
    end

    result_arr

  end

  def stock_picker

    result_arr = []
    profit = -Float::INFINITY

    i = 0
    while i < self.length
      j = i + 1
      while j < self.length
        if (self[j] - self[i]) > profit
          result_arr = [i, j]
          profit = self[j] - self[i]
        end
        j += 1
      end
      i += 1
    end

    result_arr

  end

end
