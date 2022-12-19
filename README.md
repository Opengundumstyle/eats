# [Eats](https://yeats.herokuapp.com/#/)

**Eats is a parallel version of BrianEats, with same funtionalities of yelp app. It provides a one-stop local 
platform for consumers to discover,connect and transact with local businesses of all sizes by making it easy 
to request quote, join a waitlist or make a reservation.**

# Functionality & MVPS

<h3>Feature 1: Business Page</h3>

A single page design that contains three part display element: **splash page**, **businesses index page** and **business single page** where user can travel through base on specific need.  

**splash page:**

 Utilizing react-hooks to showcase several food categories for user in a sliding form.
 
<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/splash-page.gif" width="800" height="auto">
<br>

**businesses index page:**
  
 Display a selection of businesses in boxes that match with the user end search/filter query ,each box is clickable and have access to the business single page.
 
<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/indexpage.png" width="700" height="auto">
<br>

**business single page:**

Provides detail information to user including direction, phone numbers, open-hours...etc, which also contains review component that enables a dynamic user interaction.

<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/showbusiness.png" width="600" height="auto">
<br>

<h3>Feature 2: Search/Filters</h3>

   **search:**
   Obtain businesses that best match with user input on catergory, location, name..etc through decomposing url string and extracting key words and 
   searching through businesses prop to generate a new businesses index page, in which deploys react lifecycle method **componentDidUpdate()** to trigger mapping action when
   search input is being altered.
   
  <img src="https://github.com/Opengundumstyle/eats/blob/main/frontend/components/search.gif" width="800" height="auto">
  
  As we type in "ramen" and click on the search icon, businesses that categorized as "ramen" are being shown on index page.
  
  <img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/searchResult.png" width="700" height="auto">
 
   **filter:**
    Most common selected food category and price tags are being shown on the left side compoenent enabling user to navigate through specific type of       businesses dynamically. Same businesses index component are being reused for **DRY** code.
    
 <img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/filter.gif" width="700" height="auto">
  
<h3>Feature 3: Reviews/Ratings - CRUD</h3>

<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/writeReview%202.gif" width="700" height="auto">

<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/delete-edit-review.png" width="700" height="auto">

<h3>Feature 4: Map - Google Maps</h3>
<!-- 
<img src="https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/map.gif" width="700" height="auto"> -->

![](https://github.com/Opengundumstyle/eats/blob/main/app/assets/images/map.gif)

**Bonus: Mark reviews funny, cool, useful etc.**

**Bonus: Profile**

**Bonus: Friends**


# Wiki
This project repository has a great wiki  that you should consider reading! It goes into detail about the project from a more technical aspect. If you are interested in learning more about the Eats, go ahead and check it out! [here.](https://github.com/Opengundumstyle/eats/wiki)

# Tech Stack 

front-end : HTML,CSS,Javascript,React.js,Redux

back-end : SQL, Ruby, Rails

API : Google Map API, Yelp Fusion API
