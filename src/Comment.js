import { observable } from "mobx";

class Comment {
  @observable text;

  constructor(text) {
    this.text = text;
  }
}

export default Comment;