import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// TODO: Integrate with project info later
const initialState = {
  members: [
    {
      userId: '1',
      userName: '1',
      email: 'tranducthinh.97@gmail.com1',
      avatar:
        'https://api.dicebear.com/8.x/adventurer/svg?seed=Jasper&scale=150'
    },
    {
      userId: '2',
      userName: '2',
      email: 'tranducthinh.97@gmail.com2',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Mimi&scale=150'
    },
    {
      userId: '3',
      userName: '3',
      email: 'tranducthinh.97@gmail.com3',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Daisy&scale=150'
    },
    {
      userId: '4',
      userName: '4',
      email: 'tranducthinh.97@gmail.com4',
      avatar:
        'https://api.dicebear.com/8.x/adventurer/svg?seed=Shadow&scale=150'
    },
    {
      userId: '5',
      userName: '5',
      email: 'tranducthinh.97@gmail.com5',
      avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Zoe&scale=150'
    }
  ]
};

const projectSlice = createSlice({
  name: 'project-slice',
  initialState,
  reducers: {}
});

// export const {} = projectSlice.actions;

export const projectSelector = (state: RootState) => state.projectReducer;

export default projectSlice.reducer;
