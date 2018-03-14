import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import DeckList from './DeckList'
import Deck from './Deck'
import Quiz from './Quiz'
import AddDeck from './AddDeck'
import AddCard from './AddCard'

import Tabs from './Tabs'

const MainNav = StackNavigator({
  Home: { screen: Tabs },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  AddDeck: { screen: AddDeck },
  CardCreation: {
    screen: AddCard,
    path: 'createCard/:deckId'
  }
})

export default MainNav
