def bad_two_sum?(arr, target)
  arr = arr.combination(2).to_a
  arr = arr.select { |x, y| x + y == target }

  !arr.empty?
end

# time:   O(n ^ 2)
# space:  O(n ^ 2)

def okay_two_sum?(arr, target)
  arr.sort!

  left = 0
  right = arr.length - 1

  while left < right
    case arr[left] + arr[right] <=> target
    when -1
      left += 1
    when 1
      right -= 1
    when 0
      return true
    end
  end

  false
end

# time:   O(n) if input array was sorted, else O(n log n)
# sapce:  O(1)

def two_sum?
  complements_hash = Hash.new

end
