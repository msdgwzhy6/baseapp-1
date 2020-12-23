import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import ModalStackNavigation from './ModalStackNavigation'

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <ModalStackNavigation />
    </NavigationContainer>
  )
}

export default Navigator
