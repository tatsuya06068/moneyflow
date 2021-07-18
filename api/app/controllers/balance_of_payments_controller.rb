class BalanceOfPaymentsController < ApplicationController

    include Secured
    def index
        @balanceOfPayments = BalanceOfPayment.where(userid: @auth_user_id) 
        render json: @balanceOfPayments
    end

    def create 
        #user_id = @auth_user_id
        @balanceOfPayments = BalanceOfPayment.new(balanceofpayment_params.merge(userid: @auth_user_id))
        if @balanceOfPayments.save
            render json: @balanceOfPayments, status: :created
        else
            render json: @balanceOfPayments.errors, status: :unprocessable_entity
        end
    end

    def update
        balanceofpayment = BalanceOfPayment.find(params[:id])
        balanceofpayment.update_arributes(balanceofpayment: params[:balanceofpayment])
        render json: balanceofpayment
    end

    def destroy
        balanceofpayment = BalanceOfPayment.find(params[:id])
        if balanceofpayment.destroy
            head :no_content, status: :ok
        else
            render json: balanceofpayment.errors, statud: :unprocessable_entity
        end
    end



    
    private
        def balanceofpayment_params
            params.require(:balanceofpayment).permit(:title, :date, :totalmoney, :userid)
        end
end
