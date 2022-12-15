import { GetServerSideProps } from 'next';
import { Category } from '@prisma/client';
import React from 'react';
import Form from '../../../components/category/Form';

import DashboardFrame from '../../../components/admin/dashboard';

const Edit = (props: { data: Category }) => {
  return (
    <DashboardFrame>
      <Form category={props.data} />
    </DashboardFrame>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Category;
}> = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/category/${params?.id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

export default Edit;
