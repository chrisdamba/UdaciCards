import { guid } from '../utils'

class Card {
  constructor(deckID) {
    this.deckID = deckID
    this.id = guid()
  }

  setFromObject(ob) {
    this.deckID = ob.deckID
    this.id = ob.id
  }

  static fromObject(ob) {
    let c = new Card(ob.deckID)
    c.setFromObject(ob)
    return c
  }
}

export default Card
