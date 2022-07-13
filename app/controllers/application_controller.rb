class ApplicationController < ActionController::Base

    # Expose these methods to the views
  helper_method :current_user, :signed_in?
 
  skip_before_action :verify_authenticity_token

 
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end
   
  def sign_in!(user)

    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  
  


end
