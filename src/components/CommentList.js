import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  renderComments() {
    if (this.props.comments && this.props.comments.length > 0) {
      return this.props.comments.map(comment => {
        return <li key={comment}>{comment}</li>;
      });
    } else {
      return <div>Loading</div>;
    }
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(CommentList);
