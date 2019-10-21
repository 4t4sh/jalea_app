import React, { FC, ReactElement } from 'react';

// React Native
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

// Components
import Text from '../_stylized/Text';

// Styled Components
import { Box } from './styles';

type ButtonType = {
  text: string;
  onClick: (e: GestureResponderEvent) => void;
};

const Button: FC<ButtonType> = ({
  text,
  onClick,
}: ButtonType): ReactElement => (
  <TouchableOpacity onPress={onClick}>
    <Box>
      <Text color="white" type="button">
        {text}
      </Text>
    </Box>
  </TouchableOpacity>
);

export default Button;
