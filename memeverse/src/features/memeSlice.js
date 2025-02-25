import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMemes } from '../api/memeAPI';

export const getMemes = createAsyncThunk('memes/fetchAll', async () => {
  const response = await fetchMemes();
  return response.data.memes;
});

const memeSlice = createSlice({
  name: 'memes',
  initialState: { memes: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMemes.fulfilled, (state, action) => {
        state.memes = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getMemes.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default memeSlice.reducer;
