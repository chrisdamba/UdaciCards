import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, FlatList} from 'react-native'
import { addDeck, loadData } from '../actions'
import { readDecks } from '../utils'
import styles from '../styles'

const DeckCard = ({ count, card, navigation }) => (
  <View style={styles.deckListItem} key={card.id}>
    <TouchableOpacity onPress={() => navigation.navigate('Deck', { card, count })}>
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.amount}>{count} cards</Text>
    </TouchableOpacity>
  </View>
)

class DeckList extends Component {
  static navigationOptions = {
    title: 'Decks'
  }

  componentDidMount() {
    readDecks()
      .then(decks => this.props.dispatch(loadData(decks)))
  }
  
  render() {
    const { counts, decks, navigation } = this.props
    if (!decks) {
      return null
    }

    return decks.map(deck => ((
      <DeckCard
        card={deck}
        count={counts[deck.id]}
        key={deck.id}
        navigation={navigation} 
      />
    )))
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
  counts: state.decks.reduce((acc, deck) => {
    acc[deck.id] = deck.cards.length
    return acc
  }, {})
})

export default connect(mapStateToProps)(DeckList)
