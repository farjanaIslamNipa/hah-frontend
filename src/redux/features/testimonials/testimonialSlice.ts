import {createSlice} from "@reduxjs/toolkit";
import {TTestimonialState} from "../../../types";


const initialState : TTestimonialState = {
  testimonials: null
}

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {}
})

export default testimonialSlice.reducer;