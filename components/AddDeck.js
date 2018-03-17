import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import styles from '../styles'

class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add Deck'
  }

  state = { title: '' }

  _createDeck = name => {
    let createDeckAction = addDeck(name)
    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate('Deck', {
      deck: createDeckAction.data,
      count: 0
    })
  }
  
  handleSubmit() {
    let key = this.state.title
    this._createDeck(key)
    this.setState({ title: '' })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.content}>
          <Text style={[styles.title, {marginBottom: 10}]}>What is the title of your deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
          />
          <TouchableOpacity
            style={[styles.button, styles.buttonBlack]}
            onPress={() => this.handleSubmit()}>
            <Text style={[styles.buttonText, styles.buttonBlackText]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createDeck: deckAction => {
    dispatch(deckAction)
  }
})

export default connect(null, mapDispatchToProps)(AddDeck)
