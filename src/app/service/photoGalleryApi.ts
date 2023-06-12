import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Photo} from '../types/photo'

const accessKey = '9I553SP5IWcYfoaci7h-31TklwAROqAPc4sHm4GDz9E'

export const api = createApi({
    reducerPath: 'api',
    baseQuery :fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/',
        prepareHeaders: (headers) => {
            // Add the access key to the headers
            headers.set('Authorization', `Client-ID ${accessKey}`);
            return headers;
          },
    }),
    endpoints : (builder) =>({
        getPhotos: builder.query<Photo[], string>({
            query: (name) => `/${name}` })
    })
});

export const {useGetPhotosQuery} = api
