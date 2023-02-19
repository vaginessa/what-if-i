/* eslint-disable no-console */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// display the last thursday in javascript?
const today = new Date();
const lastWeekThursday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
while (lastWeekThursday.getDay() !== 4) {
  // 4 represents Thursday (0 is Sunday, 1 is Monday, and so on)
  lastWeekThursday.setDate(lastWeekThursday.getDate() - 1);
}
const year = lastWeekThursday.getFullYear();
const month = String(lastWeekThursday.getMonth() + 1).padStart(2, '0');
const day = String(lastWeekThursday.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify81.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'e8c688a1b7mshd9cc64e392f456cp19447fjsnf4cd58121dfc',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop200: builder.query({
      query: () => `/top_200_tracks?country=GLOBAL&period=weekly&date=${formattedDate}` }),
    getTracks: builder.query({
      query: () => '/tracks' }),
  }),
});

export const { useGetTop200Query, useGetTracksQuery } = spotifyCoreApi;

