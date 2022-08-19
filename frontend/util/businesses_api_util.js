export const getAllBusinesses = (businesses) => {
    // console.log('data',data)
      return $.ajax({
            url: '/api/businesses',
            method:'GET',
            data: {businesses}, 
      })
  };
  
export const getBusiness = (id) => {
         return $.ajax({
             url:`api/businesses/${id}`,
             method: 'GET'         
         })
  }

  
export const createReview = review => (
       $.ajax({
           method:'POST',
           url:'api/reviews',
           data:{review}
       })
)

export const updateReview = review => (
  $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'patch',
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
  })
)

export const fetchReview = reviewId =>(
    $.ajax({
      url: `/api/reviews/${reviewId}/`,
    })
)




