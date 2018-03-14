import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { card } = navigation.state.params
    return {
      title: card.title
    }
  }

  render() {

    let { card, count, navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>{card.name}</Text>
            <Text style={styles.amount}>{count}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: 10}]}
            onPress={() => navigation.navigate('CardCreation', { deckId: card.id })}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          {count > 0 ? (
            <TouchableOpacity
              style={[styles.button, {backgroundColor:'#000'}]}
              onPress={() => navigation.navigate('Quiz', { card, count })}>
              <Text style={[styles.buttonText, {color: '#FFF'}]}>Start Quiz</Text>
            </TouchableOpacity>
          ) : null }
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

export default connect(mapStateToProps)(Deck)
