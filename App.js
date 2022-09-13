import React from 'react';
import {FavouriteIcon, NativeBaseProvider, StatusBar} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screen/welcome';
import {NavigationContainer} from '@react-navigation/native';
import Registrasi from './src/screen/registrasi';
import Login from './src/screen/login';
import Home from './src/screen/home';
import MobilDetail from './src/screen/mobilDetail';
import SplashScreen from './src/screen/splashScreen';
import Mobil from './src/screen/mobil';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { GRAY, PRIMARY } from './src/static/color';
import HomeIcon from './src/assets/icon/homeIcon';
import BellIcon from './src/assets/icon/bellIcon';
import UserIcon from './src/assets/icon/userIcon';
import Notifikasi from './src/screen/notifikasi';
import Profile from './src/screen/profile';
import Otp from './src/screen/otp';
import DanaTunai from './src/screen/danaTunai';
import Motor from './src/screen/motor';
import MotorDetail from './src/screen/motorDetail';
import { LogBox } from 'react-native';
import Artikel from './src/screen/artikel';
import Bengkel from './src/screen/bengkel';
import BengkelDetail from './src/screen/bengkelDetail';
import Favorite from './src/screen/favorite';
import Onboarding from './src/screen/onboarding';
import CarIcon from './src/assets/icon/carIcon';
import JualMobil from './src/screen/jualMobil';
import JualIcon from './src/assets/icon/jualIcon';
import Success from './src/screen/success';
import MotoIcon from './src/assets/icon/motoicon';
import BengkelSaya from './src/screen/bengkelSaya';
import Search from './src/screen/search';
import ProductSaya from './src/screen/productSaya';
import FavoritSaya from './src/screen/favoritSaya';
import Help from './src/screen/help';
import KebijakanPrivasi from './src/screen/kebijakanPrivasi';
import SyaratKetentuan from './src/screen/syaratKetentuan';
import SearchMotor from './src/screen/searchMotor';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingScreen = route => {
  return <Onboarding route={route} />;
};
const WelcomeScreen = route => {
  return <Welcome route={route} />;
};
const RegistrasiScreen = route => {
  return <Registrasi route={route} />;
};
const LoginScreen = route => {
  return <Login route={route} />;
};
const HomeScreen = route => {
  return <Home route={route} />;
};
const MobilScreen = route => {
  return <Mobil route={route} />;
};
const BeliMobilScreen = route => {
  return <Mobil route={route} />;
};
const MobilDetailScreen = route => {
  return <MobilDetail route={route} />;
};
const SplashScreenScreen = route => {
  return <SplashScreen route={route} />;
};
const NotifikasiScreen = route => {
  return <Notifikasi route={route} />;
};
const ProfileScreen = route => {
  return <Profile route={route} />;
};
const JualMobilScreen = route => {
  return <JualMobil route={route} />;
};
const OtpScreen = route => {
  return <Otp route={route} />;
};
const DanaTunaiScreen = route => {
  return <DanaTunai route={route} />;
};
const MotorScreen = route => {
  return <Motor route={route} />;
};
const MotorDetailScreen = route => {
  return <MotorDetail route={route} />;
};
const ArtikelScreen = route => {
  return <Artikel route={route} />;
};
const BengkelScreen = route => {
  return <Bengkel route={route} />;
};
const BengkelDetailScreen = route => {
  return <BengkelDetail route={route} />;
};
const BeliMotorScreen = route => {
  return <Motor route={route} />;
};
const BengkelSayaScreen = route => {
  return <BengkelSaya route={route} />;
};
const FavoritSayaScreen = route => {
  return <FavoritSaya route={route} />;
};
const SearchScreen = route => {
  return <Search route={route} />;
};
const SuccessScreen = route => {
  return <Success route={route} />;
};
const ProductSayaScreen = route => {
  return <ProductSaya route={route} />;
};
const HelpScreen = route => {
  return <Help route={route} />;
};
const KebijakanPrivasiScreen = route => {
  return <KebijakanPrivasi route={route} />;
};
const SyaratKetentuanScreen = route => {
  return <SyaratKetentuan route={route} />;
};
const SearchMotorScreen = route => {
  return <SearchMotor route={route} />;
};
const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        keyboardHidesTabBar: true,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? (
              <HomeIcon color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <HomeIcon color={GRAY} stroke={GRAY} />
            );
          } else if (route.name === 'Favorite') {
            iconName = focused ? (
              <FavouriteIcon size={6} color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <FavouriteIcon size={6} color={GRAY} stroke={GRAY} />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? (
              <UserIcon size={24} color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <UserIcon size={24} color={GRAY} stroke={GRAY} />
            );
          }
           else if (route.name === 'Beli Mobil') {
            iconName = focused ? (
              <CarIcon size={24} color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <CarIcon size={24} color={GRAY} stroke={GRAY} />
            );
          }
           else if (route.name === 'Beli Motor') {
            iconName = focused ? (
              <MotoIcon size={38} color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <MotoIcon size={38} color={GRAY} stroke={GRAY} />
            );
          }
           else if (route.name === 'Jual Product') {
            iconName = focused ? (
              <JualIcon size={28} color={PRIMARY} stroke={PRIMARY} />
            ) : (
              <JualIcon size={28} color={GRAY} stroke={GRAY} />
            );
          }

          return iconName;
        },
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: GRAY,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Beli Mobil" component={BeliMobilScreen} />
      <Tab.Screen name="Beli Motor" component={BeliMotorScreen} />
      <Tab.Screen name="Jual Product" component={JualMobilScreen} />
      {/* <Tab.Screen name="Favorite" component={FavoriteScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator

          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreenScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="TabStack" component={TabStack} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
          <Stack.Screen name="Search Motor" component={SearchMotorScreen} />
          <Stack.Screen name="Mobil" component={MobilScreen} />
          <Stack.Screen name="Motor" component={MotorScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />
          <Stack.Screen name="Artikel" component={ArtikelScreen} />
          <Stack.Screen name="Kebijakan Privasi" component={KebijakanPrivasiScreen} />
          <Stack.Screen name="Syarat & Ketentuan" component={SyaratKetentuanScreen} />
          <Stack.Screen name="Favorit Saya" component={FavoritSayaScreen} />
          <Stack.Screen name="Pusat Bantuan" component={HelpScreen} />
          <Stack.Screen name="Product Saya" component={ProductSayaScreen} />
          <Stack.Screen name="Bengkel Saya" component={BengkelSayaScreen} />
          <Stack.Screen name="MotorDetail" component={MotorDetailScreen} />
          <Stack.Screen name="Bengkel" component={BengkelScreen} />
          <Stack.Screen name="BengkelDetail" component={BengkelDetailScreen} />
          <Stack.Screen name="Dana Tunai" component={DanaTunaiScreen} />
          <Stack.Screen name="MobilDetail" component={MobilDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
