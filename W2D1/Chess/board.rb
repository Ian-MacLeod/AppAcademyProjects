require_relative "pieces/piece"
Dir["./pieces/*.rb"].each {|file| require file }

class Board
  attr_accessor :grid

  BOARD_SIZE = 8
  HOME_ROW = { white: 7, black: 0 }.freeze

  def initialize
    @grid = Array.new(8) { Array.new(8) { NullPiece.instance } }
    create_pieces
  end

  def create_pieces
    self[[2, 2]] = Knight.new(:white, self, [2, 2])
    self[[5, 4]] = King.new(:white, self, [5, 4])
    self[[5, 5]] = Queen.new(:white, self, [5, 5])
    self[[1, 1]] = Pawn.new(:black, self, [1, 1])
  end

  def empty?(pos)
    self.valid_pos?(pos) && self[pos].is_a?(NullPiece)
  end

  def valid_move?(start_pos, end_pos)
    return false if empty?(start_pos)
    piece = self[start_pos]
    piece.moves.include?(end_pos)
  end

  def move_piece(start_pos, end_pos)
    raise ArgumentError unless valid_move?(start_pos, end_pos)
    self[start_pos].pos = end_pos
    self[start_pos], self[end_pos] = NullPiece.instance, self[start_pos]
  end

  def []=(pos, piece)
    row, col = pos
    self.grid[row][col] = piece
  end

  def [](pos)
    row, col = pos
    self.grid[row][col]
  end

  def valid_pos?(pos)
    pos.all? { |i| in_range?(i) }
  end

  def in_range?(num)
    num.between?(0, BOARD_SIZE - 1)
  end

  def inspect
    self.to_s
  end

end
