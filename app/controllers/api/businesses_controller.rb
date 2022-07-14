class Api::BusinessesController < ApplicationController
     def index 
         @businesses = Business.all
     #     render json: @businesses
          render :index
     end
end


