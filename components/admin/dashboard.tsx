import React from 'react';
import Aside from './aside';
import Main from './Main';
import classes from './dashboard.module.css';
const DashboardFrame = (props: { children: React.ReactNode }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Aside />
        <Main>{props.children}</Main>
      </div>
    </div>
  );
};

export default DashboardFrame;
