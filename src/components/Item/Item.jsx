import React from 'react';
import If from '../If/If.jsx';

class Item extends React.Component {
  handleEdit(){

  }

  render(){
    return(
      <>
        <li id={this.props.key}>
          <If condition={this.props.condition===false}>
            <form>
              <input name={this.props.text} value={this.props.children}/>
            </form>
          </If>

          <If condition={this.props.condition===true}>
            <span id={this.props.name}>
              {this.props.children}
            </span>
          </If>

          <button onClick={this.handleEdit}>Edit</button>
          {/*<button onClick={this.handleDelete} id={this.props.key}>Delete</button>*/}
        </li>
      </>
    );
  }
}

export default Item;