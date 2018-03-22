const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find('input');
    this.$ul = $el.find('ul');
    this.users = [];

    this.$input.on("input", () => this.handleInput());
  }

  render() {
    console.log(this);
    this.$ul.empty();
    this.users.forEach(user => {
      console.log(user.username);
      let $listItem = $('<li>');
      $listItem.append($('<a>').text(user.username)
        .attr('href', `/users/${user.id}`));
      this.$ul.append($listItem);
    });
  }

  handleInput() {
    APIUtil.searchUsers(this.$input.val(), (response) => {
      this.users = response;
      this.render();
    });
  }

}

module.exports = UsersSearch;
