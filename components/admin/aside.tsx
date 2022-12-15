import Link from 'next/link';
import React from 'react';
import classes from './aside.module.css';
const Aside = () => {
  return (
    <div className={classes.aside}>
      <h1 className={classes.title}>Dashboard</h1>

      <Link className={classes.link} href='/dashboard/categories'>
        categories
      </Link>

      <Link className={classes.link} href='/dashboard/games'>
        games
      </Link>

      <Link className={classes.link} href='/'>
        Accueil
      </Link>
    </div>
  );
};

export default Aside;
