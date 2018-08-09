import React, { Component } from 'react';
import InlineEdit from 'react-inline-editing';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
@observer
class IcecreamView extends Component {
  @observable
  comment = '';

  render() {
    const { flavor, color, i, comments } = this.props;

    return (
      <div>
        <button type="button" onClick={() => { this.props.store.deleteIcecream(i); }}>X</button>
        flavor: <InlineEdit text={flavor} onFocusOut={(data) => { this.props.store.updateIcecream(data, i, "flavor"); }} />
        color: <InlineEdit text={color} onFocusOut={(data) => {
          this.props.store.updateIcecream(data, i, "color");
        }} />
        <div>Comments:
          {comments.map((comment, index) => <p key={index}>{comment.text}</p>)}
          {/* {this.props.store.iceCreams[i].comments.map((comment, index) => <p key={index}>{comment.text}</p>)} */}
        </div>
        <input
          type="text"
          name="comment"
          onChange={(e) => { this.comment = e.target.value }} />
        <input type="button" onClick={(e) => { this.props.store.addComment(i, this.comment) }} value="comment" />

      </div>
    );
  }
}

export default IcecreamView;