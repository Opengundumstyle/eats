export const signup = (user) => {
  // console.log('data',data)
    return $.ajax({
          url: '/api/users',
          method:'POST',
          data: {user}, 
    })
};

export const login = (user) => {
  // console.log('data',data)
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user}, 
  })
};

export const logout = () => {
  return $.ajax({
    url: `/api/session`,
    method: 'DELETE'
  })
};