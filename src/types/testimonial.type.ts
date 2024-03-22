export type TTestimonialState = {
  testimonials: TTestimonial[] | null
}
export type TTestimonial = {
  _id?: string;
  name: string;
  username: string;
  email: string;
  address: string;
  testimonial: string;
}

