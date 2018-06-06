import React from 'react'
import { Text, AppRegistry } from 'react-native'
import Header from './src/components/Header'

const App = () => <Header />

AppRegistry.registerComponent('albums', () => App)
