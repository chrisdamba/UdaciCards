import CardModel from './Card'
import DeckModel from './Deck'

let MockCards = [
  new CardModel('A Decorator is:', 'An expression', 'fakeDeckID'),
  new CardModel('Static and Weakly Typed', 'Dynamic Typing', 'fakeDeckID'),
  new CardModel('Generic functions & Polymorphism', 'takes the target, name, and decorator descriptor as arguments', 'fakeDeckID'),
  new CardModel('Higher order functions', 'No type checks', 'fakeDeckID')
]

let MockCard = MockCards[0]
let MockDecks = [new DeckModel('JavaScript'), new DeckModel('TypeScript')]

MockDecks.map(deck => {
  deck.addCard(new CardModel('A Decorator is:', 'An expression', deck.id))
  deck.addCard(new CardModel('Static and Weakly Typed', 'Dynamic Typing', deck.id))
  deck.addCard(new CardModel('Generic functions & Polymorphism', 'takes the target, name, and decorator descriptor as arguments', deck.id))
  deck.addCard(new CardModel('Higher order functions', 'No type checks', deck.id))
  return deck
})

let MockDeck = MockDecks[0]

export { MockCards, MockCard, MockDecks, MockDeck }
