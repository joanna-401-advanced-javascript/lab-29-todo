import React from 'react';
import Header from '../Header/Header.jsx';
import Form from '../Form/Form.jsx';
import Item from '../Item/Item.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      todoList: [
        {
          text: 'Do laundry',
          id: Math.random(),
          complete: true,
        },
        {
          text: 'Fold clothes',
          id: Math.random(),
          complete: false,
        },
      ],
      temp: null,
    };
  }

  handleTemp = (tempText) => {
    this.setState({temp: tempText});
  };

  handleState = () => {
    this.setState((previousState) => (
      previousState.todoList.push({text: previousState.temp, id: Math.random(), complete: false,})
    ));
  };

  deleteItem = (id, event) => {
    this.setState((previousState) => ({
      todoList: previousState.todoList.filter(i => i.id !== id),
    }));
  };

  render(){
    return(
      <>
        <Header />

        <section className="todo">
          <header>
            <h2>There are {this.state.count} Items To Complete</h2>
          </header>

          <Form handleTemp={this.handleTemp} handleState={this.handleState}/>

          <div className="items">
            <ul>
              {this.state.todoList.map( (item) => {
                return (
                  <>
                  <Item condition={item.complete} name={item.text} key={item.id} deleteItem={this.deleteItem}>
                    {item.text}

                  </Item>
                  <button onClick={(event) => this.deleteItem(item.id, event)} id={item.id}>Delete</button>
                  </>
                )
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default App;