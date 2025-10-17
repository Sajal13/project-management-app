import { Category } from '@/types/response';
import { api } from './api';

export const categoryApi = api.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/categories'
    }),
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: body => ({
        url: '/categories',
        method: 'POST',
        body
      })
    }),
    updateCategory: builder.mutation<
      Category,
      { id: string; data: Partial<Category> }
    >({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteCategory: builder.mutation<{ success: boolean; id: string }, string>({
      query: id => ({
        url: `/categories/${id}`,
        method: 'DELETE'
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
