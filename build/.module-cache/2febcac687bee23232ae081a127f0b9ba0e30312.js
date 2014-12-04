/** @jsx React.DOM */

var posts = React.createClass({displayName: 'posts',
  render: function() {
    return (
      React.DOM.div(null, "Hello Wor;d")
    )
  } 
});




React.renderComponent(
  posts(null),
  document.getElementById('content')
);