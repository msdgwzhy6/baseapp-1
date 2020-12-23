import {RootStackParamList} from '@/navigator/RootStackNavigation'
import {RouteProp} from '@react-navigation/native'
import React, {FC} from 'react'
import {Text, View} from 'react-native'

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>
}
const Detail: FC<IProps> = ({route}) => {
  return (
    <View>
      <Text>detail{route.params.id}</Text>
    </View>
  )
}

export default Detail
