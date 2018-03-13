import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { setLocalNotification } from './utils'
import MainNav from './components/MainNav'

import reducer from './reducers'
const store = createStore(reducer)

export default class App extends Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    )
  }
}
