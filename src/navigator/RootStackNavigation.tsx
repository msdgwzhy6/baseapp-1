import React, {FC} from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp
} from '@react-navigation/stack'
import Detail from '@/pages/detail'
import {Platform, StyleSheet} from 'react-native'
import BottomTabs from './BottomStackNavigator'

export type RootStackParamList = {
  BottomTabs: {
    screen?: string
  }
  Home: undefined
  Detail: {id: number}
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>
/**
 * Navigator 路由
 * Screen 页面
 */
const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator: FC = () => {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true, // 开启安卓手势
        gestureDirection: 'horizontal', // 手势方向设置水平
        headerStyle: {
          ...Platform.select({
            android: {
              // 安卓标题栏样式
              elevation: 0,
              borderBottomWidth: StyleSheet.hairlineWidth
            }
          })
        },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        options={{headerTitle: '详情'}}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
