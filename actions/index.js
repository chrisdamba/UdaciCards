import { ADD_DECK, ADD_CARD, LOAD_DATA } from './types'

import Card from '../models/Card'
import Deck from '../models/Deck'
  
export const addDeck = name => ({ type: ADD_DECK, data: new Deck(name) })
  
export const addCard = (question, answer, deckId) => ({ type: ADD_CARD, data: new Card(question, answer, deckId) })
  
export const loadData = data => ({ type: LOAD_DATA, data })