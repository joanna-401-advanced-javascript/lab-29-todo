import React from 'react';

class Form extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    this.props.handleTemp(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleState();
  };

  render(){
    return (
      <>
        <div className="form" >
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Add To Do List Item" onChange={this.handleChange}/>
          </form>
        </div>
      </>
    )
  }
}

export default Form;