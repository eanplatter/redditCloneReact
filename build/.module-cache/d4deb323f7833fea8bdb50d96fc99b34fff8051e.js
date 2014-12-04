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
    });
    return (
      React.DOM.div(null, 
        listOfPosts
      )
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
        ), 
          React.DOM.div(null, 
            comments(null)
          )
      )
    )
  }
});

var comments = React.createClass({displayName: 'comments',
  getInitialState: function() {
    return {data: []}
  },
  addComment: function(comment) {
    debugger;
    this.state.data.push(comment);
    this.setState({data: this.state.data});
  },
  render: function() {
    var listOfComments = this.state.data.map(function(individualComment) {
      return (
        comment({data: individualComment})
      );
    })
    return (
      React.DOM.div(null, 
        React.DOM.div(null, 
          addCommentForm({submitComment: this.addComment})
        ), 
        React.DOM.div(null, 
          listOfComments
        )
      )
    )
  }
});

var comment = React.createClass({displayName: 'comment',
    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.p(null, 
            this.props.data.body
          ), 
          React.DOM.i(null, this.props.data.author)
        )
      )
    }
});

var addCommentForm = React.createClass({displayName: 'addCommentForm',
  submitCommentForm: function(e) {
    e.preventDefault();
    var body = this.refs.body.getDOMNode().value;
    var author = this.refs.author.getDOMNode().value;
    this.props.submitComment({
      body: body,
      author: author
    })
    this.refs.body.getDOMNode().value = '';

  },
  render: function() {
    return (
      React.DOM.form(null, 
        React.DOM.textarea({type: "text", ref: "body", placeholder: "comment", rows: "8"}), 
        React.DOM.input({type: "text", ref: "author", placeholder: "name"}), 
        React.DOM.input({type: "submit", onClick: this.submitCommentForm})
      )
    )
  }
});


React.renderComponent(
  posts(null),
  document.getElementById('content')
);