import React, {FC} from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets
} from '@react-navigation/stack'
import Login from '@/pages/login'
import RootNavigator from './RootStackNavigation'

export type ModalStackParamList = {
  Login: undefined
  RootNavigator: {
    screen?: string
  }
}
export type ModalStackNavigation = StackNavigationProp<ModalStackParamList>

const ModalStack = createStackNavigator<ModalStackParamList>()

const ModalStackNavigation: FC = () => {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerBackTitleVisible: false,
        headerShown: false
      }}>
      <ModalStack.Screen name="Login" component={Login} />
      <ModalStack.Screen name="RootNavigator" component={RootNavigator} />
    </ModalStack.Navigator>
  )
}

export default ModalStackNavigation
