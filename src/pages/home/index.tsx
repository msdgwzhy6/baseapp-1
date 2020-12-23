import {ModalStackNavigation} from '@/navigator/ModalStackNavigation'
import {RootStackNavigation} from '@/navigator/RootStackNavigation'
import React, {FC} from 'react'
import {Text, View, Button} from 'react-native'

interface IProps {
  navigation: RootStackNavigation & ModalStackNavigation
}

const Home: FC<IProps> = ({navigation}) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="详情"
        onPress={() => {
          navigation.navigate('Detail', {id: 100})
        }}
      />
      <Button
        title="去登录"
        onPress={() => {
          navigation.replace('Login')
        }}
      />
    </View>
  )
}

export default Home
