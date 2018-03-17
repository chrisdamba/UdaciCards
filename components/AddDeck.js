import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import styles from '../styles'

class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add Deck'
  }

  state = { title: '', error: false }

  _createDeck = name => {
    let createDeckAction = addDeck(name)
    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate('Deck', {
      deck: createDeckAction.data,
      count: 0
    })
  }

  handleTextChange = title => {
    this.setState({title})
    if (title.length > 0) {
      this.setState({error: false})
    }
  }

  handleSubmit() {
    let key = this.state.title
    if (key.trim() === '') {
      return this.setState({ error: true })
    }
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
            onChangeText={this.handleTextChange}
            value={this.state.title}
          />
          {this.state.error ? (
            <FormValidationMessage containerStyle={{height: 30}}>
              Deck title is required
            </FormValidationMessage>
          ) : (
            <FormValidationMessage containerStyle={{height: 30}} />
          )}
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
