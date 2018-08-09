import { observable, action, computed, autorun, reaction } from 'mobx';
import IceCream from '../IceCream';
import Comment from '../Comment';

class IceCreamStore {
  @observable iceCreams = [];
  @observable filterString = '';

  @computed
  get iceCreamsCount() {
    return this.iceCreams.length;
  }

  @computed
  get filteredArray() {
    return this.iceCreams.filter(({ flavor, color }) => flavor === this.filterString || color === this.filterString);
  }

  @computed
  get filteredLength() {
    return this.filteredArray.length;
  }

  @action
  addIceCream = (flavor, color) => {
    this.iceCreams.push(new IceCream(flavor, color));
  };

  @action
  deleteIcecream = id => {
    this.iceCreams = this.iceCreams.filter((iceCream) => iceCream.id !== id);
    // this.iceCreams.splice(index, 1); // before filter, did by index
  };

  @action
  updateIcecream = (data, id, prop) => {
    this.iceCreams = this.iceCreams.map((iceCream) => {
      if (iceCream.id === id) {
        iceCream[prop] = data;
        return iceCream;
      }
      return iceCream;
    })
    // this.iceCreams[index][prop] = data; // before filter, did by index
  };

  @action
  addComment = (id, commentText) => {
    this.iceCreams = this.iceCreams.map((iceCream) => {
      if (iceCream.id === id) {
        iceCream.comments.push(new Comment(commentText));
        return iceCream;
      }
      return iceCream;
    })
    // this.iceCreams[index].comments.push(new Comment(commentText)); // before filter, did by index
  };

  @action
  updateFilter = (data) => {
    this.filterString = data;
  };
}

const store = new IceCreamStore();

// let disposer = autorun(() => console.log(store.iceCreamsCount));
// let disposer1 = reaction(() => store.iceCreams.length, () => console.log(store.iceCreamsCount));
// let disposer2 = reaction(() => store.iceCreams.map(item => ({ flavor: item.flavor, color: item.color })), () => console.log(store.iceCreams));

export default store;
