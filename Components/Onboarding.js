import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen() {
  const onboardingRef = useRef(null);

  const pages = [
    {
      backgroundColor: '#e9bcbe',
      title: 'Page1',
      subtitle: 'This is the first page',
    },
    {
      backgroundColor: '#a6e4d0',
      title: 'Page2',
      subtitle: 'This is the second page',
    },
    {
      backgroundColor: '#fdeb93',
      title: 'Page3',
      subtitle: 'This is the third page',
    },
  ];


  return (
    <Onboarding
      ref={onboardingRef}
      pages={pages}
      showSkip={false} // Hide the Skip button
      showNext={false} // Hide the Next button
    />
  );
}
