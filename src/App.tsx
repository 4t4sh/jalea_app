import React, { useRef, useState } from 'react';
import Modalize from 'react-native-modalize';

// Services
import { getUsers } from './services';

// React Native
import { SafeAreaView, Image } from 'react-native';

// Components
import Button from './components/Button';
import ListItem from './components/ListItem';

// Styled Components
import Container, { BottomContainer } from './components/_stylized/Container';
import Text from './components/_stylized/Text';

type UserType = {
  picture: {
    thumbnail: string;
  };
  email: string;
  name: {
    first: string;
    last: string;
  };
};

const App = () => {
  const modalRef = useRef<Modalize>(null);
  const [usersData, setUsersData] = useState([]);

  const onOpen = (): void => {
    const modal = modalRef.current;

    getUsers()
      .then(({ data }) => {
        setUsersData(data.results);

        if (modal) {
          modal.open();
        }
      })
      .catch(err => console.error(err));
  };

  const onClose = (): void => {
    const modal = modalRef.current;

    if (modal) {
      modal.close();
    }
  };

  const data = () => {
    return usersData.map((user: UserType) => ({
      image: user.picture.thumbnail,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
    }));
  };

  const renderItem = ({ item: { image, name, email } }) => (
    <ListItem image={image} name={name} email={email} />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Container>
        <Text color="#302D63" type="title" bold>
          #BeerJS No. 35 🎉
        </Text>
        <Text
          color="#A1195B"
          type="subtitle"
          center>{`Tests in React Native \n without tears 🦄 😂`}</Text>
        <Image
          style={{
            width: '40%',
            height: '40%',
          }}
          source={require('./assets/beerjs_logo.png')}
          resizeMode="contain"
        />
        <Button text="¿Quién está acá? 👀" onClick={onOpen} />
      </Container>
      <Modalize
        ref={modalRef}
        adjustToContentHeight
        FooterComponent={
          <BottomContainer>
            <Button text="Perfect! 🦄" onClick={onClose} />
          </BottomContainer>
        }
        flatListProps={{
          data: data(),
          renderItem: renderItem,
          keyExtractor: item => item.email,
          showsVerticalScrollIndicator: true,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
