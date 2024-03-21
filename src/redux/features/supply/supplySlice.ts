import {createSlice} from "@reduxjs/toolkit";
import {TSupplyState} from "../../../types";

const initialState : TSupplyState= {
  supplies: null
}

const supplySlice = createSlice({
  name: 'supplies',
  initialState,
  reducers: {}
})

export default supplySlice.reducer;