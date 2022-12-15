import { Category } from '@prisma/client';
import { GetServerSideProps } from 'next';
import React from 'react';

import DashboardFrame from '../../../components/admin/dashboard';
import Form from '../../../components/Game/Form';

const New = (props: { categories: Category[] }) => {
  const { categories } = props;
  return (
    <DashboardFrame>
      <Form categories={categories} />
    </DashboardFrame>
  );
};

export default New;

export const getServerSideProps: GetServerSideProps<{
  categories: Category[];
}> = async () => {
  const res = await fetch('http://localhost:3000/api/category');
  const categories = await res.json();
  if (!categories) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categories,
    },
  };
};
