# app/controllers/public_controller.rb

# frozen_string_literal: true
class PublicController < ActionController::API
  # This route doesn't need authentication
  def public 
  end
end