import Link from 'next/link';
import React from 'react';
import classes from './games.module.css';
import { useRouter } from 'next/router';
import DashboardFrame from '../../../components/admin/dashboard';
import { GetServerSideProps } from 'next';
import { Game } from '@prisma/client';
import { postData } from '../../../utility/fetchData';

const Games = (props: { games: Game[] }) => {
  const { games } = props;
  const Router = useRouter();
  return (
    <DashboardFrame>
      <div>
        <button className={classes.btn}>
          <Link href='/dashboard/games/new'>Create New Game</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th className={classes.cell}>Title</th>
              <th className={classes.cell}>Developer</th>
              <th className={classes.cell}>Editor</th>
              <th className={classes.cell}>Link</th>
              <th className={classes.cell}>Short Description</th>
              <th className={classes.cell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, i) => {
              return (
                <tr key={i}>
                  <td className={classes.cell}>{game.title}</td>
                  <td className={classes.cell}>{game.developer}</td>
                  <td className={classes.cell}>{game.editor}</td>
                  <td className={classes.cell}>{game.link}</td>
                  <td className={classes.cell}>{game.shortDescription}</td>
                  <td className={classes.cell}>
                    <Link href={`/dashboard/games/${game.id}`}>
                      <span style={{ color: 'blue', marginRight: '2px' }}>
                        Edit
                      </span>
                    </Link>
                    <button
                      onClick={() =>
                        postData(
                          game,
                          'http://localhost:3000/',
                          `api/games/${game.id}`,
                          'DELETE',
                        )
                          .then(() => {
                            alert('category deleted!');
                            Router.push('/dashboard/categories');
                          })
                          .catch((e) => console.log(e))
                      }
                      style={{
                        color: 'red',
                        marginLeft: '2px',
                        cursor: 'pointer',
                        border: 'none',
                        background: 'transparent',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashboardFrame>
  );
};

export const getServerSideProps: GetServerSideProps<{
  games: Game[];
}> = async () => {
  const res = await fetch('http://localhost:3000/api/game');
  const games = await res.json();
  if (!games) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      games,
    },
  };
};

export default Games;
