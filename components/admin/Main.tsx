import React from 'react';
import classes from './main.module.css';
const Main = (props: { children: React.ReactNode }) => {
  return <div className={classes.main}>{props.children}</div>;
};

export default Main;
