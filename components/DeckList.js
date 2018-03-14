import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, FlatList} from 'react-native'
import { addDeck, loadData } from '../actions'
import { readDecks } from '../utils'
import styles from '../styles'

const DeckCard = ({ count, card, navigation }) => (
  <View style={styles.deckListItem} key={card.title}>
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
  
  _mkDeckViews() {
    const { counts, decks, navigation } = this.props
    if (!decks) {
      return null
    }

    return (
      <View style={styles.deckList}>
        <FlatList
          data={Object.keys(decks)}
          keyExtractor={(card) => card}
          renderItem={(card) => (<DeckCard 
            count={counts[card.id]}
            card={decks[card.id]} 
            navigation={navigation} 
          />)}
        />
      </View>
    )
  }
  
  render() {this._mkDeckViews()}
}

const mapStateToProps = state => ({
  decks: state.decks,
  counts: state.decks.reduce((acc, deck) => {
    acc[deck.id] = deck.cards.length
    return acc
  }, {})
})

export default connect(mapStateToProps)(DeckList)
