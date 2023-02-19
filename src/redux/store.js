import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { spotifyCoreApi } from './services/spotifyCore';

export const store = configureStore({
  reducer: {
    [spotifyCoreApi.reducerPath]: spotifyCoreApi,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyCoreApi.middleware),
});
