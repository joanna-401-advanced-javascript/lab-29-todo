import React from 'react';
// import renderer from 'react-test-renderer';
import App from '../components/App/App';

describe('<App />', () => {
  it('is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('h2').exists()).toBe(true);
  });
});
