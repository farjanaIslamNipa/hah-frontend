export type TOpinionState = {
  opinions: TOpinion[] | null
}
export type TOpinion = {
  _id?: string;
  username: string;
  email: string;
  opinion: string;
  comments: TComment[];
}

export type TComment = {
  username: string;
  email: string;
  comment: string;
}