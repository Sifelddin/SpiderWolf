import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

import { Category } from '@prisma/client';
import classes from './categories.module.css';
import DashboardFrame from '../../../components/admin/dashboard';
import { postData } from '../../../utility/fetchData';
import { useRouter } from 'next/router';

const Categories = (props: { data: Category[] }) => {
  const Router = useRouter();
  return (
    <DashboardFrame>
      <div>
        <button className={classes.btn}>
          <Link href='/dashboard/categories/new'>Create New Category</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th className={classes.cell}>ID</th>
              <th className={classes.cell}>name</th>
              <th className={classes.cell}>actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((cat, i) => {
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
            })}
          </tbody>
        </table>
      </div>
    </DashboardFrame>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Category[];
}> = async () => {
  const res = await fetch('http://localhost:3000/api/category');
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

export default Categories;
