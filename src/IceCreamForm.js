import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
  addIceCream: allStores.store.addIceCream
}))
@observer
class IceCreamForm extends Component {
  @observable
  iceCream = {
    flavor: '',
    color: ''
  };

  @action
  inputChange = e => {
    this.iceCream[e.target.name] = e.target.value;
  };

  submitForm = e => {
    this.props.addIceCream(this.iceCream.flavor, this.iceCream.color);
    this.iceCream.flavor = '';
    this.iceCream.color = '';
  };

  render() {
    return (
      <div className="container">
        <label htmlFor="Flavor">Flavor: </label>
        <input
          type="text"
          name="flavor"
          onChange={this.inputChange}
          value={this.iceCream.flavor} />
        <label htmlFor="Color">Color: </label>
        <input
          type="text"
          name="color"
          onChange={this.inputChange}
          value={this.iceCream.color} />
        <input type="button" onClick={this.submitForm} value="submit" />
      </div>
    );
  }
}

export default IceCreamForm;
