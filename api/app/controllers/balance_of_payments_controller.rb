class BalanceOfPaymentsController < ApplicationController

    def index
        @balanceOfPayments = BalanceOfPayment.find(params[:userid])
    
        render json: @balanceOfPayments
    end

    def create 
        @balanceOfPayments = BalanceOfPayment.new(balanceofpayment_params)
    
        if @balanceOfPayments.save
            render json: @balanceOfPayments, status: :created, location: @balanceOfPayments
          else
            render json: @balanceOfPayments.errors, status: :unprocessable_entity
          end
    end

    
    private
        def balanceofpayment_params
            params.require(:balanceOfPayment).permit(:title, :date, :totalmoney, :userid)
        end
end
