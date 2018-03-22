const APIUtil = {
  followUser: id => {
    return $.ajax(`/users/${id}/follow`, {
      method: "post",
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    return $.ajax(`/users/${id}/follow`, {
      method: "delete",
      dataType: 'json'
    });
  },

  searchUsers: (queryVal, success) => {
    $.ajax('/users/search', {
      method: "get",
      data: { query: queryVal },
      dataType: 'json',
      success
    });
  }
};



module.exports = APIUtil;
