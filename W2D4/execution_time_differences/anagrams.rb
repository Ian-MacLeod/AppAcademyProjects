def first_anagram?(string1, string2)
  anagrams = string1.chars.permutation.to_a.map(&:join)
  anagrams.include?(string2)
end

# time: O(n!)
# space: O(n!)

# arr.subset => O(2^n)

def second_anagram?(str1, str2)
  str1.chars.each do |char|
    idx = str2.index(char)
    return false if idx.nil?
    str2[idx] = ""
  end

  str2.empty?
end

# time:   O(n^2)
# space:  O(n)

def third_anagram?(str1, str2)
  str1.sort == str2.sort
end

# time:   O(n log n)
# space:  O(n)

def fourth_anagram?(str1, str2)
  char_count = Hash.new(0)
  str1.each_char do |el|
    char_count[el] += 1
  end
  str2.each_char do |el|
    if char_count[el] == 0
      return false
    else
      char_count[el] -= 1
    end
  end
  str1.length == str2.length
end

# time: O(n)
# space: O(n)   O(alphabet_size)?



second_anagram("gizmo", "sally")    #=> false
second_anagram("elvis", "lives")
