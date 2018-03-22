class ChangeArtworkShares < ActiveRecord::Migration[5.1]
  def change
    remove_index :artwork_shares, [:viewer_id, :artwork_id]
    add_index :artwork_shares, [:viewer_id, :artwork_id], unique: true
  end
end
