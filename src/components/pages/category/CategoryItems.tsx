'use client';

import React from 'react';
import { useGetCategoriesQuery } from '@/lib/features/categoryApi';

const CategoryItems = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;
  console.log(categories);
  return <div>CategoryItems</div>;
};

export default CategoryItems;
