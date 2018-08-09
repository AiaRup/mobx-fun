import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IceCreamForm from './IceCreamForm';
import { observer, inject } from 'mobx-react';
import IcecreamView from './IcecreamView';


@inject('store')
@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mobx</h1>
        </header>
        <IceCreamForm />
        <label htmlFor="filter">Filter: </label>
        <input type="text" value={this.props.store.filterString} onChange={(e) => { this.props.store.updateFilter(e.target.value) }} />
        <div>
          <h2>Filter by: {this.props.store.filterString}, Result: {this.props.store.filteredLength}, Total IceCreams: {this.props.store.iceCreamsCount}</h2>
          {this.props.store.filteredArray.map((iceCream) =>
            <IcecreamView key={iceCream.id} i={iceCream.id} {...iceCream} />
          )}
        </div>
        {/* <div>
          {this.props.store.iceCreams.map((iceCream, i) =>
            <IcecreamView key={i} i={i} {...iceCream} />
          )}
        </div> */}
      </div>
    );
  }
}

export default App;
