export type TCommentState = {
  comments: TComment[] | null
}

export type TComment = {
  _id?: string;
  name: string;
  email: string;
  comment: string;
}