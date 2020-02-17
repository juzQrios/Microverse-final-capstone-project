class AddColumnsToDoctor < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :likes, :integer
    add_column :doctors, :exp, :integer
    add_column :doctors, :speciality, :integer
  end
end
