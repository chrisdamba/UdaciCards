import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import styles from '../styles'

class AddCard extends Component {
  state = { question: '', answer: '' }
  static navigationOptions = { title: 'Add Card' }

  _handleQuestion = question => {
    this.setState({ question })
  }

  _handleAnswer = answer => {
    this.setState({ answer })
  }

  _createCard = () => {
    this.props.addCard(this.state.question, this.state.answer, this.props.deck.id)
    this.setState(() => ({ question: '', answer: '' }))
    this.props.navigation.navigate('Deck', {
      deck: this.props.deck,
      count: this.props.count+1
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={styles.title}>Add new Card</Text>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={this._handleQuestion}
            value={this.state.question}
          />
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={this._handleAnswer}
            value={this.state.answer}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._createCard}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    deck: props.navigation.state.params.deck,
    count: props.navigation.state.params.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (question, answer, deckId) => dispatch(addCard(question, answer, deckId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
