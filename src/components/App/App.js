import React from 'react';
import Header from '../Header/Header.jsx';
import Item from '../Item/Item.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  render(){
    return(
      <>
        <Header />

        <div className="form">
          <form>
            <input className="input" placeholder="Add To Do List Item"/>
          </form>
        </div>

        <div className="items">
          <header>
            <h2>There are {this.state.count} Items To Complete</h2>
          </header>
          <Item>
            <p></p>
          </Item>
        </div>
      </>
    );
  }
}

export default App;