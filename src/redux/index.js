import { configureStore } from '@reduxjs/toolkit'
import GameReducer from "./slicers/game.slicer"
import { cardAdapter  } from './slicers/game.slicer'
export const store = configureStore({
    reducer: {
        cards: GameReducer
    },
})

const CardSelector = cardAdapter.getSelectors( state => state.cards)

export const allCards = () => CardSelector.selectAll(store.getState())

export const getOne = (id) => () => CardSelector.selectById(store.getState(), id)
