class CreateBalanceOfPayments < ActiveRecord::Migration[6.1]
  def change
    create_table :balance_of_payments do |t|
      t.string :title, null: false
      t.date :date
      t.integer :totalmoney
      t.text :userid, null: false

      t.timestamps
    end
  end
end
