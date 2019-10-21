import styled from 'styled-components/native';

// React Native
import { TextProps } from 'react-native';

// Types
type HeadingType = {
  type?: string;
  bold?: boolean;
  center?: boolean;
  color?: string;
};

function calculateTextSize(type: string): string {
  switch (type) {
    case 'title':
      return '35px';

    case 'subtitle':
      return '25px';

    case 'button':
      return '20px';

    default:
      return '15px';
  }
}

function calculateMarginTop(type: string): string {
  switch (type) {
    case 'title':
      return '30px';

    case 'subtitle':
      return '20px';

    default:
      return '10px';
  }
}

function calculateMarginBottom(type: string): string {
  switch (type) {
    case 'title':
      return '30px';

    case 'subtitle':
      return '20px';

    default:
      return '10px';
  }
}

const Text = styled.Text<TextProps & HeadingType>`
  margin-top: ${({ type = 'normal' }) => calculateMarginTop(type)};
  margin-bottom: ${({ type = 'normal' }) => calculateMarginBottom(type)};
  font-size: ${({ type = 'normal' }) => calculateTextSize(type)};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center = false }) => (center ? 'center' : 'auto')};
  color: ${({ color }) => (color ? color : 'black')};
`;

export default Text;
