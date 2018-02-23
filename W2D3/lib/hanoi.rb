class HanoiGame

  attr_reader :towers

  def initialize
    @towers = [[3,2,1],[],[]]
  end

  def move(from, to)
    raise ArgumentError unless legal_move?(from, to)

    self.towers[to] << self.towers[from].pop
  end

  def legal_move?(from, to)
    raise(ArgumentError, "please choose between 0 and 2") unless from.between?(0, 2) && to.between?(0, 2)
    return false if self.towers[from].empty?
    self.towers[to].empty? || self.towers[to].last > self.towers[from].last
  end

  def won?
    return false unless self.towers[0].empty?
    self.towers[1].empty? || self.towers[2].empty?
  end

  def play
    until won?
      self.render
      self.prompt
    end
    puts "Congrats!"
  end

  def prompt
    begin
      puts "Where do you want to go? In the form of 'from, to'"
      from, to = gets.chomp.split(', ').map(&:to_i)
      self.move(from, to)
    rescue ArgumentError
      retry
    end
  end

  def render
    p self.towers
  end
end
