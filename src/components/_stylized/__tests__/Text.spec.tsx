import 'react-native';
import React from 'react';
import Text from '../Text';

import renderer from 'react-test-renderer';
import { string } from 'prop-types';

const createTestProps = (props: any) => ({
  text: string,
  ...props,
});

describe('Snapshot: ', () => {
  const props = createTestProps({});
  const component = renderer.create(<Text {...props} />).toJSON();

  it('Should match the snapshot: ', () => {
    expect(component).toMatchSnapshot();
  });
});
