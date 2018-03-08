require_relative 'card'

class Deck
  def initialize
    @remaining_cards = []
    self.populate
  end

  def populate

    rank = 2
    while rank < 15
      suit = 0
      while suit <= 3
        remaining_cards << Card.new(rank, suit)
        suit += 1
      end
      rank += 1
    end

  end

  def length
    remaining_cards.length
  end

  def shuffle!
    remaining_cards.shuffle!
  end

  def deal(n = 1)
    raise ArgumentError if n > self.length
    if n == 1
      [remaining_cards.pop]
    else
      remaining_cards.pop(n)
    end
  end


  private

  attr_reader :remaining_cards

end
