import React from 'react';
import { If, Else } from '../If/If.jsx';

class Item extends React.Component {
  handleEdit(){

  }

  handleDelete(){

  }

  render(){
    return(
      <>
        <ul>
          <li>
            <If condition={}>
              {this.props.children}
              <form>
                <input name={this.props.children.id} value={this.props.children.text}/>
              </form>
            </If>

            <Else>
              <span id={this.props.children.id}>
                {this.props.children.text}
              </span>
            </Else>

            <button onClick={this.handleEdit}>Edit</button>
            <button onClick{this.handleDelete}>Delete</button>
          </li>
        </ul>
      </>
    );
  }
}

export default Item;