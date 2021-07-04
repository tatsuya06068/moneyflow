class BalanceOfPaymentsController < ApplicationController

    include Secured
    def index
        @balanceOfPayments = BalanceOfPayment.find(@auth_user_id) 
        render json: @balanceOfPayments
    end

    def create 
        @balanceOfPayments = BalanceOfPayment.new(balanceofpayment_params.merge(user_id: @current_user_id))
    
        if @balanceOfPayments.save
            render json: @balanceOfPayments, status: :created, location: @balanceOfPayments
          else
            render json: @balanceOfPayments.errors, status: :unprocessable_entity
          end
    end

    
    private
        def balanceofpayment_params
            params.require(:balanceOfPayment).permit(:title, :date, :totalmoney, :user_id)
        end
end
