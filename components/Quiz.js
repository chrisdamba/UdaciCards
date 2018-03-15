import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils'
import styles from '../styles'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  state = {
    current: 0,
    correctAnswers: 0,
    showQuestion: true,
    showResults: false
  }

  _toggleView = () => {
    this.setState(previousState => ({ showQuestion: !previousState.showQuestion }))
  }

  _submitAnswer = status => {
    if (status === 'correct') {
      this.setState((previousState) => ({ correctAnswers: previousState.correctAnswers + 1 }))
    }

    clearLocalNotification()
      .then(setLocalNotification)

    this._changeQuestion()
  }

  _changeQuestion = () =>{
    if (this.state.current === this.props.count - 1) {
      this.setState((previousState) => ({ showResults: true }))
    } else {
      this.setState((previousState) => ({ current: previousState.current + 1 }))
    }
  }

  _calculatePrecentage() {
    let value = (this.state.correctAnswers / this.props.count) * 100
    return (
      parseFloat(value) + "%"
    )
  }

  render() {
    const { card, count, navigation } = this.props

    return this.state.showResults ? (
        <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>
              You got {this._calculatePrecentage()} 
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: 10}]}
            onPress={() => navigation.navigate('Quiz', { card, count })}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:'#000'}]}
            onPress={() => navigation.navigate('Deck', { card, count })}>
            <Text style={[styles.buttonText, { color: '#FFF' }]}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    ) : (
    <View style={styles.container}>
        <View>
          <Text style={styles.cardsLeft}>{`Card ${this.state.current + 1} of ${count}`}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>
              {this.state.showQuestion ? card.question : card.answer}
            </Text>
            <TouchableOpacity onPress={this._toggleView}>
              <Text style={styles.toggle}>{this.state.showQuestion ? 'Show Answer' : 'Show Question'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.buttonPlain, {backgroundColor:'#7AC74F', marginBottom: 10}]}
            onPress={() => this._submitAnswer('correct')}>
            <Text style={styles.buttonBlackText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonPlain, {backgroundColor:'#DB504A'}]}
            onPress={() => this._submitAnswer('incorrect')}>
            <Text style={styles.buttonBlackText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    card: props.navigation.state.params.card,
    count: props.navigation.state.params.count
  }
}

export default connect(mapStateToProps)(Quiz)
