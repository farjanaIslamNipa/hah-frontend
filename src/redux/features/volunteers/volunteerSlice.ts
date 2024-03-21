import {createSlice} from "@reduxjs/toolkit";
import {TVolunteerState} from "../../../types";


const initialState : TVolunteerState = {
  volunteers: null
}

const volunteerSlice = createSlice({
  name: 'volunteers',
  initialState,
  reducers: {}
})

export default volunteerSlice.reducer;