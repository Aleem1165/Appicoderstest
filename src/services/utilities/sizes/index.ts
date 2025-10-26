import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const sizes: {
  screenWidth: number;
  screenHeight: number;
} = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export { sizes };
