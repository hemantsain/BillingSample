import React, { useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { splashStyles } from './splash.styles';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 1500);
  }, [props.navigation]);

  return (
    <SafeAreaView style={splashStyles.rootContainer}>
      <View style={splashStyles.imageContainer}>
        <Text style={splashStyles.textStyle}>Splash</Text>
      </View>
    </SafeAreaView>
  );
}
