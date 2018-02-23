require 'rspec'
require 'card'

RSpec.describe Card do

  subject(:card) {Card.new(7, 2)}
  let(:king) {Card.new(13, 2)}
  describe '#initialize' do
    it 'sets the suit and rank' do
      expect(card.rank).to eq(7)
      expect(card.suit).to eq(2)
    end
  end
  describe '#to_s' do
    it 'translates the card into a string' do
      expect(card.to_s).to eq("7H")
    end
    it 'correctly translates face card' do
      # allow(card).to receive(:rank).and_return(13)
      expect(king.to_s).to eq('KH')
    end
  end

end
