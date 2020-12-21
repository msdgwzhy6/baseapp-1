import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '@/pages/home'
import Detail from '@/pages/detail'

type RootStackParamList = {
  Home: undefined
  Detail: undefined
}
/**
 * Navigator 路由
 * Screen 页面
 */
const Stack = createStackNavigator<RootStackParamList>()

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center'
        }}>
        <Stack.Screen
          options={{headerTitle: '首页'}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerTitle: '详情'}}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
