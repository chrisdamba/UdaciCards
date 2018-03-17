import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import colors from '../styles/colors'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck.name
    }
  }

  render() {

    let { deck, count, navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>{deck.name}</Text>
            <Text style={styles.amount}>{count > 0 ? `${count} card${(count > 1 ? 's': '')}` : 'No cards'}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: 10}]}
            onPress={() => navigation.navigate('CardCreation', { count, deck })}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          {count > 0 ? (
            <TouchableOpacity
              style={[styles.button, {backgroundColor:colors.black}]}
              onPress={() => navigation.navigate('Quiz', { count, deck })}>
              <Text style={[styles.buttonText, {color: colors.white}]}>Start Quiz</Text>
            </TouchableOpacity>
          ) : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    deck: props.navigation.state.params.deck,
    count: props.navigation.state.params.count
  }
}

export default connect(mapStateToProps)(Deck)
