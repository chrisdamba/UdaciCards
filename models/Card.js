import { guid } from '../utils'

class Card {
  constructor(deckId, questions, title) {
    this.deckID = deckId
    this.questions = questions
    this.title = title
    this.id = guid()
  }

  setFromObject(ob) {
    this.deckId = ob.deckId
    this.questions = ob.questions
    this.title = ob.title
    this.id = ob.id
  }

  static fromObject(ob) {
    let c = new Card(ob.deckId, ob.questions, ob.title)
    c.setFromObject(ob)
    return c
  }
}

export default Card
