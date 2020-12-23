import React, {FC, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '@/pages/home'
import Listen from '@/pages/listen'
import Mine from '@/pages/mine'
import {RouteProp, getFocusedRouteNameFromRoute} from '@react-navigation/native'
import {RootStackNavigation, RootStackParamList} from './RootStackNavigation'

export type BottomStackParamList = {
  Home: undefined
  Listen: undefined
  Mine: undefined
}
type Route = RouteProp<RootStackParamList, 'BottomTabs'>
interface IProps {
  navigation: RootStackNavigation
  route: Route
}
const Tab = createBottomTabNavigator<BottomStackParamList>()
const getHeaderTitle = (route: Route) => {
  const routeName =
    getFocusedRouteNameFromRoute(route) || route.params?.screen || 'Home'
  switch (routeName) {
    case 'Home':
      return '首页'
    case 'Listen':
      return '我听'
    case 'Mine':
      return '我的'
    default:
      break
  }
}
const BottomTabs: FC<IProps> = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route)
    })
  }, [navigation, route])
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f86442'
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '首页'
        }}
        component={Home}
      />
      <Tab.Screen
        name="Listen"
        options={{
          tabBarLabel: '视听'
        }}
        component={Listen}
      />
      <Tab.Screen
        name="Mine"
        options={{
          tabBarLabel: '我的'
        }}
        component={Mine}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
