import React, { FC, ReactElement } from 'react';

// React Native
import { Image } from 'react-native';

// Styled Components
import {
  Container,
  Avatar,
  Textcontainer,
  TextName,
  TextEmail,
} from './styles';

type ListItemType = {
  email: string;
  image: string;
  name: string;
};

const ListItem: FC<ListItemType> = ({
  email,
  image,
  name,
}: ListItemType): ReactElement => (
  <Container>
    <Avatar>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: image,
        }}
      />
    </Avatar>
    <Textcontainer>
      <TextName>{name}</TextName>
      <TextEmail>{email}</TextEmail>
    </Textcontainer>
  </Container>
);

export default ListItem;
