import { read, write } from './storage'
import Deck from './../models/Deck'

export const DECK_KEY = 'flashcards:decks'
export const readDecks = () => read(DECK_KEY, Deck.fromObject)  
export const writeDecks = decks => write(DECK_KEY, decks)