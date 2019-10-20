import React from 'react';

// React Native
import { SafeAreaView, Image } from 'react-native';

// Components
import Button from './components/Button';

// Styled Components
import Container from './components/_stylized/Container';
import Text from './components/_stylized/Text';

const App = () => (
  <SafeAreaView>
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
      <Button text="¿Quién está acá? 👀" />
    </Container>
  </SafeAreaView>
);

export default App;
