require 'rspec'
require 'hanoi'

RSpec.describe HanoiGame do

  subject(:game) {HanoiGame.new}
  describe '#Initialize' do
    it 'creates starting towers properly' do
      expect(game.towers).to eq([[3,2,1],[],[]])
    end
  end

  describe '#move' do
    it 'successfully moves disk when legal' do
      game.move(0,2)
      expect(game.towers).to eq([[3,2],[],[1]])
    end
    it 'throws error when startig pile is empty' do
      expect { game.move(2,0) }.to raise_error(ArgumentError)
    end
    it 'throws error when moving bigger disk to smaller disk' do
      game.move(0,2)
      expect { game.move(0,2) }.to raise_error(ArgumentError)
    end
    it 'throws error when prompted towers don\'t exist' do
      expect { game.move(45, 1) }.to raise_error("please choose between 0 and 2")
    end
  end

  describe '#won?' do
    it 'correctly identifies a winning position' do
      allow(game).to receive(:towers).and_return([[],[3,2,1],[]])
      # game.towers = [[],[3,2,1],[]]
      expect(game).to be_won
    end
    it 'correctly rejects starting position as a winning position' do
      expect(game).not_to be_won
    end
    it 'correctly rejects mid-game position' do
      allow(game).to receive(:towers).and_return([[],[2,1],[3]])
      # game.towers = [[],[2,1],[3]]
      expect(game).not_to be_won
    end
  end








end
