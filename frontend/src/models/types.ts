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

export interface ITask {
  taskId: string;
  issueKey: string;
  title: string;
  description: string;
  status: 'Done' | 'In Progress' | 'To Do';
  dueDate: number;
  assigneeId: IUser['userId'][];
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  issueLink: string;
  relatedCommit: ICommit[];
}
