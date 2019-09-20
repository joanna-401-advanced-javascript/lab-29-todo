import React from 'react';
import If from '../If/If.jsx';

class Item extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    this.props.handleTemp(event.target.value);
  };

  render(){
    return(
      <>
        <li id={this.props.key}>
          <If condition={this.props.condition===false}>
            <form>
              <input name={this.props.text} placeholder={this.props.children} onChange={this.handleChange}/>
            </form>
          </If>

          <If condition={this.props.condition===true}>
            <span id={this.props.name}>
              {this.props.children}
            </span>
          </If>
        </li>
      </>
    );
  }
}

export default Item;