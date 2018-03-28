class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :text, null: false
      t.integer :todo_id, null: false
      t.integer :order, null: false

      t.timestamps
    end
  end
end
