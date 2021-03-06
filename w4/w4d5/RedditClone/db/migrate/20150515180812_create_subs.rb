class CreateSubs < ActiveRecord::Migration
  def change
    create_table :subs do |t|
      t.string :title
      t.text :description
      t.integer :moderator_id

      t.timestamps null: false
    end

    add_index(:subs, :title, unique: true)
    add_index(:subs, :moderator_id)
  end
end
