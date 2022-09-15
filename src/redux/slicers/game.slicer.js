import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import Deck from "../../modules/js/deck"
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const cardAdapter = createEntityAdapter({
    selectId: card => card.id,
    sortComparer: false
})

export const gameSlice = createSlice({
    name: "cards",
    initialState: cardAdapter.getInitialState(),
    reducers: {
        addBulk: cardAdapter.setMany,
        setOne: cardAdapter.updateOne
    }

  
})

export const { addBulk , createDeck, setOne } = gameSlice.actions;
export default gameSlice.reducer

