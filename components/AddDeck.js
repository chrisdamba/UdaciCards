import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils'
import styles from '../styles'

class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add Deck'
  }

  state = { title: '' }

  _createDeck = name => {
    let createDeckAction = addDeck(name)
    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate("CardCreation", {
      deckId: createDeckAction.data.id
    })
  }
  
  handleSubmit() {
    let key = this.state.title
    let entry = {
      title: key,
      questions: []
    }

    this.props.addDeck(key, entry)

    saveDeckTitle({ key, entry })

    this.setState({ title: '' })
    this.props.navigation.navigate('Deck', { card: entry })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={[styles.title, {marginBottom: 10}]}>What is the title of your deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.text}
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


export default connect(null, mapDispatchToProps)(AddDeck)

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction)
    }
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length
        return sum
      },
      {}
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen)