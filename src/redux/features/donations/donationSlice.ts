import {createSlice} from "@reduxjs/toolkit";
import {TDonationState} from "../../../types";

const initialState : TDonationState= {
  supplies: null
}

const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {}
})

export default donationSlice.reducer;