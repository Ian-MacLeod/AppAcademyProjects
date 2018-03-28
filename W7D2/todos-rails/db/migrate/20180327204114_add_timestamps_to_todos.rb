class AddTimestampsToTodos < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :created_at, :datetime, null: false
    add_column :todos, :updated_at, :datetime, null: false
  end
end
