export interface IUser {
  userId: string;
  userName: string;
  email: string;
  avatar: string;
}

export interface ICommit {
  commitHash: string;
  updatedAt: number;
  link: string;
  author?: string;
}
