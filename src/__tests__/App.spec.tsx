import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

describe('Snapshot: ', () => {
  const component = renderer.create(<App />).toJSON();

  it('Should match the snapshot: ', () => {
    expect(component).toMatchSnapshot();
  });
});
