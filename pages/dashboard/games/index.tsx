import Link from 'next/link';
import React from 'react';
import classes from './games.module.css';
import DashboardFrame from '../../../components/admin/dashboard';

const games = () => {
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
            </tr>
          </thead>
          <tbody>
            {/* {props.data.map((cat, i) => {
              return (
                <tr key={i}>
                  <td className={classes.cell}>{cat.id}</td>
                  <td className={classes.cell}>{cat.name}</td>
                  <td className={classes.cell}>
                    <Link href={`/dashboard/categories/${cat.id}`}>
                      <span style={{ color: 'blue', marginRight: '2px' }}>
                        Edit
                      </span>
                    </Link>
                    <button
                      onClick={() =>
                        postData(
                          cat,
                          'http://localhost:3000/',
                          `api/category/${cat.id}`,
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
            })}*/}
          </tbody>
        </table>
      </div>
    </DashboardFrame>
  );
};

export default games;
