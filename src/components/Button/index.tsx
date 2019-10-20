import React, { FC, ReactElement } from 'react';

// React Native
import { TouchableOpacity } from 'react-native';

// Components
import Text from '../_stylized/Text';

// Styled Components
import { Box } from './styles';

type ButtonType = {
  text: string;
};

const Button: FC<ButtonType> = ({ text }: ButtonType): ReactElement => {
  const onIconPress = () => {
    console.log('Press');
  };

  return (
    <TouchableOpacity onPress={onIconPress}>
      <Box>
        <Text color="white" type="button">
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
