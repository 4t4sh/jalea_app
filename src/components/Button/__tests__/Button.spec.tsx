import 'react-native';
import React from 'react';
import Button from '..';

import renderer from 'react-test-renderer';
import { string } from 'prop-types';

const createTestProps = (props: any) => ({
  text: string,
  ...props,
});

describe('Snapshot: ', () => {
  const props = createTestProps({});
  const component = renderer.create(<Button {...props}>Test</Button>).toJSON();

  it('Should match the snapshot: ', () => {
    expect(component).toMatchSnapshot();
  });
});
