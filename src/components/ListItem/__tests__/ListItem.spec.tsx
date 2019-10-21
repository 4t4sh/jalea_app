import 'react-native';
import React from 'react';
import ListItem from '..';

import renderer from 'react-test-renderer';
import { string } from 'prop-types';

const createTestProps = (props: any) => ({
  text: string,
  ...props,
});

describe('Snapshot: ', () => {
  const props = createTestProps({});
  const component = renderer
    .create(<ListItem {...props}>Test</ListItem>)
    .toJSON();

  it('Should match the snapshot: ', () => {
    expect(component).toMatchSnapshot();
  });
});
