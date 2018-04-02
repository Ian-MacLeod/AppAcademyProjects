def my_min_i(arr)
  arr.each do |el|
    return el if arr.all? {|x| x >= el}
  end

  nil
end

def my_min_ii(arr)
  min = nil
  arr.each do |el|
    if min.nil? || el < min
      min = el
    end
  end
  min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# my_min_ii(list)

def sub_sum_i(arr)
  max_val = nil
  arr.each_index do |idx1|
    (idx1...arr.length).each do |idx2|
      sub_val = arr[idx1..idx2].inject(:+)
      if max_val.nil? || sub_val > max_val
        max_val = sub_val
      end
    end
  end
  max_val
end

def sub_sum_ii(arr)
  min_sum = 0
  running_sum = 0
  max_sub_val = arr.first

  arr.each do |el|
    running_sum += el
    if running_sum - min_sum > max_sub_val
      max_sub_val = running_sum - min_sum
    end
    if running_sum < min_sum
      min_sum = running_sum
    end
  end

  max_sub_val
end

list = [2, 3, -6, 7, -6, 7]
sub_sum_ii(list)

# sub_sum_i(list)

# def test(arr)
#   hcol = Hash.new(0)
#   col = 0
#   arr.each_with_index do |x, y|
#     hcol[y] = x if y == 0
#     hcol[y] = hcol[y-1] + x
#   end
#   p
#
# end
