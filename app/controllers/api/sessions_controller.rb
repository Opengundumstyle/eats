class Api::SessionsController < ApplicationController
    # before_action :require_signed_in!, only: [:destroy]

    def new
      render :new
    end
  
    def create
      @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password],
      )
      
  
      if @user
        sign_in!(@user)
        render 'api/users/show'
      else
        render json: ['Invalid username or password'] , status: 401
      end
    end
  
    def destroy
       if sign_out!
        # render :destroy
        render json: ["success sign out"]
      else
        render json: ["hello"]
      end
    end
end
