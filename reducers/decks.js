import { ADD_DECK, ADD_CARD, LOAD_DATA } from '../actions/types'
import Deck from './../models/Deck'
import { writeDecks } from './../utils'

function decksWithNewCard(oldDecks, card) {
  let newState = oldDecks.map(deck => {
    if (deck.id === card.deckId) {
      deck.addCard(card)
    } 
    return deck 
  })
  saveDecks(newState)
  return newState
}

function saveDecks(state) {
  writeDecks(state)
  return state
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data
    case ADD_DECK:
      let newState = state.concat(action.data)
      saveDecks(newState)
      return newState
    case ADD_CARD:
      return decksWithNewCard(state, action.data)

  }
  return state
}

export default reducer