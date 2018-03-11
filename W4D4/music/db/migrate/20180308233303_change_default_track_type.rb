class ChangeDefaultTrackType < ActiveRecord::Migration[5.1]
  def change
    change_column_default :tracks, :is_bonus, false
  end
end
