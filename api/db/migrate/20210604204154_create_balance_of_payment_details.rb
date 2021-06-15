class CreateBalanceOfPaymentDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :balance_of_payment_details do |t|
      t.string :name, null: false
      t.integer :purchaseNum
      t.integer :money
      t.references :balance_of_payment, foreign_key: true
      t.timestamps
    end
  end
end
