/** @jsx React.DOM */

var posts = React.createClass({displayName: 'posts', 
  
  render: function() {
    return (
      React.DOM.div(null, "Hello World")
    )
  } 
});




React.renderComponent(
  posts(null),
  document.getElementById('content')
);