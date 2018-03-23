class Card

  attr_reader :rank, :suit

  RANK_STR = '__23456789TJQKA'
  SUIT_STR = 'CDHS'

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
    @symbol = RANK_STR[rank] + SUIT_STR[suit]
  end

  def to_s
    @symbol
  end



end
