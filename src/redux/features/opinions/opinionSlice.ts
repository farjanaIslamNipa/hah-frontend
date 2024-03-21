import {createSlice} from "@reduxjs/toolkit";
import {TOpinionState} from "../../../types/opinion.type";


const initialState : TOpinionState = {
  opinions: null
}

const opinionSlice = createSlice({
  name: 'opinions',
  initialState,
  reducers: {}
})

export default opinionSlice.reducer;