import {ModalStackNavigation} from '@/navigator/ModalStackNavigation'
import React, {FC} from 'react'
import {Text, View, Button} from 'react-native'

interface IProps {
  navigation: ModalStackNavigation
}
const Login: FC<IProps> = ({navigation}) => {
  return (
    <View>
      <Text>login</Text>
      <Button
        title="登录"
        onPress={() => {
          navigation.replace('RootNavigator', {screen: 'Home'})
        }}
      />
    </View>
  )
}

export default Login
