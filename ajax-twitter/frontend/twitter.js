const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  $('.follow-toggle').each(function(idx, el) {
    new FollowToggle($(el));
  });

  $('.users-search').each(function(idx, el) {
    new UsersSearch($(el));
  });
});
