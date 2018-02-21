require 'rspec'
require 'tdd'

RSpec.describe Array do

  describe '#my_uniq' do
    subject(:arr) {[1,4,2,3,4,4,4]}
    it 'preserves order of appearance' do
      expect(arr.reverse.my_uniq).to eq([4,3,2,1])
    end

    it 'removes duplications' do
      expect(arr.my_uniq).to eq([1,4,2,3])
    end

    it 'returns a new array' do
      expect(arr.my_uniq).not_to be(arr)
    end
  end

  describe '#two_sum' do
    context 'if array has no matches' do
      subject(:arr) { [-3, 1, 0] }
      it 'returns an empty array' do
        expect(arr.two_sum).to eq([])
      end

    end
    context 'if array has matches' do
      subject(:arr) { [-2, 2, 1, 0, -1] }
      it 'returns all pairs of indices of elements that sum to zero' do
        expect(arr.two_sum).to eq([[0, 1], [2, 4]])
      end
    end

  end

  describe '#my_transpose' do
    context 'when given an array' do
      subject(:arr) { [[1,2],[3,4]] }
      it 'returns a transposed array' do
        expect(arr.my_transpose).to eq( [[1,3],[2,4]] )
      end

      it 'does not modify the original array' do
        arr.my_transpose
        expect(arr).to eq([[1,2],[3,4]])
      end
    end
  end

  describe '#stock_picker' do
    context 'when profit possible' do
      subject(:arr) { [10, 15, 5, 20, 50] }
      it 'picks the most profitable pair of days' do
        expect(arr.stock_picker).to eq([2, 4])
      end
      it 'doesn\'t sell stocks before bought' do
        expect(arr.stock_picker).to eq([2, 4])
      end
    end
    context 'when there are multiple most profitable pairs' do
      subject(:arr) { [25, 50, 5, 30] }
      it 'returns the first pair of days if there are multiple' do
        expect(arr.stock_picker).to eq([0, 1])
      end
    end

    context 'when profit is not possible' do
      subject(:arr) { [50, 40, 35, 10, 0] }
      it 'still will sell to minimize loss' do
        expect(arr.stock_picker).to eq([1, 2])
      end
    end
  end









end
