// export default props => {
//   if (props.condition){
//     return props.children;
//   } else {
//     return null;
//   }
// };

import React from 'react';

const render = (condition = false, children = null) => {
  return condition ? children : null;
};

// export const If = (props) => React.Children.map(props.children, (child) => React.cloneElement(child, { condition: props.condition })); // eslint-disable-line

export const If = (props) => (props.children, props.children);
export const Else = (props) => render(!props.condition, props.children);

