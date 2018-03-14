import { guid } from '../utils'

class Card {
  constructor(question, answer, deckId) {
    this.deckId = deckId
    this.question = question
    this.answer = answer
    this.id = guid()
  }

  setFromObject(ob) {
    this.deckId = ob.deckId
    this.question = ob.question
    this.answer = ob.answer
    this.id = ob.id
  }

  static fromObject(ob) {
    let c = new Card(ob.question, ob.answer, ob.deckId)
    c.setFromObject(ob)
    return c
  }
}

export default Card
