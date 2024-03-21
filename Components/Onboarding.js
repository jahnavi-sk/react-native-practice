import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const  OnboardingScreen = ({navigation}) => {
  const onboardingRef = useRef(null);

  const pages = [
    {
      backgroundColor: '#e9bcbe',
      image: '',
      title: 'Page1',
      subtitle: 'This is the first page',
    },
    {
      backgroundColor: '#a6e4d0',
      image: '',
      title: 'Page2',
      subtitle: 'This is the second page',
    },
    {
      backgroundColor: '#fdeb93',
      image: '',
      title: 'Page3',
      subtitle: 'This is the third page',
    },
  ];


  return (
    <Onboarding
      ref={onboardingRef}
      pages={pages}
      onSkip={ ()=> navigation.navigate("Msg")}
      // showSkip={false} // Hide the Skip button
      // showNext={false} // Hide the Next button
    />
  );
}

export default OnboardingScreen;