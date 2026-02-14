import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UIState {
    heroImageLoaded: boolean;
}

const initialState: UIState = {
  heroImageLoaded: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHeroImageLoaded: (state, action: PayloadAction<boolean>) => {
      state.heroImageLoaded = action.payload;
    },
  },
});

export const { setHeroImageLoaded } = uiSlice.actions;
export default uiSlice.reducer;
