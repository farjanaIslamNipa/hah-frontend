import {createSlice} from "@reduxjs/toolkit";
import {TCommentState} from "../../../types";



const initialState : TCommentState = {
  comments: null
}

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {}
})

export default commentSlice.reducer;