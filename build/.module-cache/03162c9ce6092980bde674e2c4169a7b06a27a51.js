/** @jsx React.DOM */

var posts = React.createClass({displayName: 'posts',
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, this.state.data.title), 
        React.DOM.p(null, 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" + ' ' +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + ' ' +
            "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" + ' ' +
            "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" + ' ' +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" + ' ' +
            "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        )
      )
    )
  } 
});




React.renderComponent(
  posts(null),
  document.getElementById('content')
);