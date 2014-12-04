/** @jsx React.DOM */

var postsData = [
  {
    title: 'woah', 
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  },
  {
    title: 'oh baby guuurl', 
    body: 'Lorem ipsum dolor sit amet, jk i mean hes a fag elit, sed do eiusmod'
  },
  {
    title: 'mmhmm', 
    body: 'omg, jake is such a faaaaaaaantastic guy elit, sed do eiusmod'
  }
];

var posts = React.createClass({displayName: 'posts',
  getInitialState: function() {
    return {data: postsData};
  },
  render: function() {
    var listOfPosts = this.state.data.map(function(individualPost) {
      return (
        post({data: individualPost})
      )
    })
    return (
      {listOfPosts}
    )
  } 
});

var post = React.createClass({displayName: 'post',
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, this.props.data.title), 
        React.DOM.p(null, 
          this.props.data.body
        )
      )
    )
  }
});



React.renderComponent(
  posts(null),
  document.getElementById('content')
);