class Api::BusinessesController < ApplicationController
     def index 
         businesses = Business.all
         @businesses = businesses.includes(:reviews)
         render :index
     end
     
     def show
           @business = Business.find(params[:id])
        #    if !@business.reviews
        #       @business.reviews = []
        #    end
     end

     
end


