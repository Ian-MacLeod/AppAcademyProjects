require 'rspec'
require 'deck'

RSpec.describe Deck do

  subject(:deck) {Deck.new}
  let(:new_deck) {Deck.new}
  let(:remaining_cards) { ["1H", "2H"] }

  describe '#initialize' do
    it 'Starts with 52 cards' do
      expect(deck.length).to eq(52)
    end

    # it 'Starts with 52 unique cards' do
    #
    # end
  end

  before(:each) do
    allow(new_deck).to receive(:remaining_cards).and_return(remaining_cards)
  end

  describe '#length' do
    it 'tells us how many cards are left in the deck' do
      expect(new_deck.length).to eq(remaining_cards.length)
    end
  end

  describe '#shuffle' do
    it 'calls shuffle on remaining_cards' do
      expect(remaining_cards).to receive(:shuffle!)
      new_deck.shuffle!
    end
  end

  describe '#deal' do
    it 'deals a card' do
      expect(new_deck.deal).to eq(["2H"])
    end
    it 'deals many cards when requested' do
      expect(new_deck.deal(2)).to eq(["1H", "2H"])
    end
    it 'raises error when there are not enough cards' do
      expect {new_deck.deal(5)}.to raise_error(ArgumentError)
    end

  end






end
