class ChangeNoteIndices < ActiveRecord::Migration[5.1]
  def change
    remove_index :notes, %i(user_id track_id)
    add_index :notes, :user_id
  end
end
