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

var posts = React.createClass({
  getInitialState: function() {
    return {data: postsData};
  },
  addPost: function(post) {
    this.state.data.push(post);
    this.setState({data: this.state.data})
  },
  render: function() {
    var listOfPosts = this.state.data.map(function(individualPost) {
      return (
        <post data={individualPost} />
      )
    });
    return (
      <div>
        <addPostForm submitPost={this.addPost}/>
        {listOfPosts}
      </div>
    )
  } 
});

var post = React.createClass({
  getInitialState: function() {
    return {
      data: {upvotes:0, downvotes:0}
    }
  },
  upvote: function() {
    this.state.data.upvotes++;
    this.setState({
      data: this.state.data
    })
  },
  downvote: function() {
    this.state.data.upvotes--;
    this.setState({
      data: this.state.data
    })
  },  
  render: function() {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <p>
          {this.props.data.body}
        </p>
          <div>
            <span>karma: {this.state.data.upvotes}</span>
            <button onClick={this.upvote}>
              &#10548;
            </button>
            <button onClick={this.downvote}>
              &#10549;
            </button>
          </div>        
          <div>
            <comments />
          </div>
      </div>
    )
  }
});

var comments = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  addComment: function(comment) {
    this.state.data.push(comment);
    this.setState({data: this.state.data});
  },
  render: function() {
    var listOfComments = this.state.data.map(function(individualComment) {
      return (
        <comment data={individualComment} />
      );
    })
    return (
      <div>
        <div>
          <addCommentForm submitComment={this.addComment} />
        </div>
        <div>
          {listOfComments}
        </div>
      </div>
    )
  }
});

var comment = React.createClass({
    getInitialState: function() {
      return {
        data: {upvotes:0, downvotes:0}
      }
    },
    upvote: function() {
      this.state.data.upvotes++;
      this.setState({
        data: this.state.data
      })
    },
    downvote: function() {
      this.state.data.upvotes--;
      this.setState({
        data: this.state.data
      })
    },    
    render: function() {
      return (
        <div>
          <p>
            {this.props.data.body}
          </p>
          <i>{this.props.data.author}</i> 
          <div>
            <span>karma: {this.state.data.upvotes}</span>
            <button onClick={this.upvote}>
              &#10548;
            </button>
            <button onClick={this.downvote}>
              &#10549;
            </button>
          </div>
        </div>
      )
    }
});

var addPostForm = React.createClass({
  submitPostForm: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value;
    var body = this.refs.body.getDOMNode().value;
    this.props.submitPost({
      title: title,
      body: body
    })
    this.refs.title.getDOMNode().value = '';
    this.refs.body.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form>
        <input type='text' ref="title" placeholder="title" /><br />    
        <textarea type='text' ref="body" placeholder="body" rows="8" cols="90"></textarea><br />
        <input type='submit' onClick={this.submitPostForm}/>
      </form>  
    )  
  }
})

var addCommentForm = React.createClass({
  submitCommentForm: function(e) {
    e.preventDefault();
    var body = this.refs.body.getDOMNode().value;
    var author = this.refs.author.getDOMNode().value;
    this.props.submitComment({
      body: body,
      author: author
    })
    this.refs.body.getDOMNode().value = '';
    this.refs.author.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form>
        <textarea type='text' ref="body" placeholder="comment" rows="8" cols="90"></textarea><br />
        <input type='text' ref="author" placeholder="name" /><br />
        <input type='submit' onClick={this.submitCommentForm}/>
      </form>
    )
  }
});


React.renderComponent(
  <posts />,
  document.getElementById('content')
);