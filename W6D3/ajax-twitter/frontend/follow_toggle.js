const APIUtil = require("./api_util.js");


class FollowToggle {
  constructor ($el) {
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.handleClick = this.handleClick.bind(this);

    this.$el.on('click', this.handleClick);
    this.render();
  }

  handleClick() {
    let response;
    if (this.followState) {
      response = APIUtil.unfollowUser(this.userId);
    } else {
      response = APIUtil.followUser(this.userId);
    }
    this.$el.prop('disabled', true);
    response.then(function() {
      this.followState = !this.followState;
      this.render();
      this.$el.prop('disabled', false);
    }.bind(this));

  }

  render() {
    if (this.followState) {
      this.$el.text('Unfollow!');
    } else {
      this.$el.text('Follow!');
    }
  }
}

module.exports = FollowToggle;
