export type TOpinionState = {
  opinions: TOpinion[] | null
}
export type TOpinion = {
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