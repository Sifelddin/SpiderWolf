import React from 'react';
import Form from '../../../components/Game/Form';

import DashboardFrame from '../../../components/admin/dashboard';
import { Category, Game } from '@prisma/client';
import { GetServerSideProps } from 'next';

const Edit = (props: { game: Game; categories: Category[] }) => {
  return (
    <DashboardFrame>
      <Form categories={props.categories} game={props.game} />
    </DashboardFrame>
  );
};

export const getServerSideProps: GetServerSideProps<{
  categories: Category[];
}> = async ({ params }) => {
  const catsres = await fetch('http://localhost:3000/api/category');
  const gameres = await fetch(`http://localhost:3000/api/game/${params?.id}`);
  const categories = await catsres.json();
  const game = await gameres.json();
  if (!categories) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categories,
      game,
    },
  };
};

export default Edit;
