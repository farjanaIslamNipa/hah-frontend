export type TVolunteerState = {
  volunteers: TVolunteer[] | null
}
export type TVolunteer = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}