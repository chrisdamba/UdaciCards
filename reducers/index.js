import { MockDecks, MockCards } from './../models/Mocks'
import DecksReducer from './decks'

const initialState = () => ({ decks: MockDecks })

export const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action)
  return { decks }
}
