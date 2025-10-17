import { api } from './api';
import { setCredentials } from '@/lib/store/slice/authSlice';

interface AuthResponse {
  token: string;
}

interface AuthRequest {
  email: string;
}

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, AuthRequest>({
      query: body => ({
        url: '/auth',
        method: 'POST',
        body
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCredentials({ token: data.token }));
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
    })
  }),
  overrideExisting: false
});

export const { useLoginMutation } = authApi;
