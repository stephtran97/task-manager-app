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

export interface IProject {
  name: string;
  type: string;
  avatar: string;
  key: string;
  projectLead: IUser['userId'];
  defaultAssignee: 'Unassigned';
  boardName: string; // max 30 char length
  members: IUser[];
}
