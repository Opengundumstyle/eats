class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in
    
    def create
        @review = current_user.reviews.new(review_params)
        
        if @review.save
         
            render :show
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end
  
    def update
         @review = Review.find(params[:id])

         if @review.update(review_params)
           render :show
         else
           render json: @review.errors.full_messages, status: 422
         end
    end
  
   def destroy
        @review = Review.find(params[:id])

        if @review.destroy
        render :show
        else
        render json: @review.errors.full_messages, status: 422
        end
   end
  
   private
    def review_params
         params.require(:review).permit(:rating,:body,:business_id,:user_id)
    end   
end