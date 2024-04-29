import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IProject, IUser } from '../../models/types';

// TODO: Integrate with project info later
const initialState: IProject = {
  name: 'My Kanban Project',
  type: 'Software project',
  avatar: 'https://www.google.com',
  key: 'KAN',
  projectLead: '1',
  defaultAssignee: 'Unassigned',
  boardName: 'Kanban board Task manager',
  members: [
    {
      userId: '1',
      userName: 'User name 1',
      email: 'tranducthinh.97@gmail.com1',
      avatar:
        'https://api.dicebear.com/8.x/adventurer/svg?seed=Jasper&scale=150'
    },
    {
      userId: '2',
      userName: 'User name 2',
      email: 'tranducthinh.97@gmail.com2',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Mimi&scale=150'
    },
    {
      userId: '3',
      userName: 'User name 3',
      email: 'tranducthinh.97@gmail.com3',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Daisy&scale=150'
    },
    {
      userId: '4',
      userName: 'User name 4',
      email: 'tranducthinh.97@gmail.com4',
      avatar:
        'https://api.dicebear.com/8.x/adventurer/svg?seed=Shadow&scale=150'
    },
    {
      userId: '5',
      userName: 'User name 5',
      email: 'tranducthinh.97@gmail.com5',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Zoe&scale=150'
    }
  ]
};

const projectSlice = createSlice({
  name: 'project-slice',
  initialState,
  reducers: {
    setBoardName: (state, action: { payload: string }) => {
      state.boardName = action.payload;
    },
    addMembersToProject: (state, action: { payload: IUser }) => {
      state.members = [...state.members, action.payload];
    }
  }
});

export const { setBoardName, addMembersToProject } = projectSlice.actions;

export const projectSelector = (state: RootState) => state.projectReducer;

export default projectSlice.reducer;
