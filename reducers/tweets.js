import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  needsRefresh: false
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    refreshTweets: (state) => {
      state.needsRefresh = !state.needsRefresh;
    }
  },
});

export const { refreshTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
