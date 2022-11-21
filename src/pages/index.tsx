import { Box, useTheme } from '@mui/material'

import { makeStyles } from '@mui/styles';

import { Header } from '../components/Home/Header'

const useStyles = makeStyles((theme: any) => ({
  MainWrapper: {
    height: '100vh',
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center'
  },
})) as any;

export default function Home() {
  const theme = useTheme()
  const classes = useStyles(theme);
  
  return (
    <Box className={classes.MainWrapper} >
      <Header />
    </Box>
  );
}
