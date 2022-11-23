// import { LocationOnOutlined } from "@mui/icons-material";
// import { Typography, useTheme } from "@mui/material";
// import { Box } from "@mui/system";

// import useStyles from "./styles";

// import Climate from "../../../assets/icons/climate.svg";
// import Cloud from "../../../assets/icons/cloud.svg";

// export function Header() {
//   const classes = useStyles();
//   return (
//     <Box className={classes.MainWrapper}>
//       <Typography fontSize={16} fontWeight={500} mt={10} color="text.secondary">
//         Segunda Feira, Novembro
//       </Typography>
//       <Box className={classes.LocationWrapper} ml={-0.5}>
//         <LocationOnOutlined />
//         <Typography fontSize={22} fontWeight={600}>
//           San Francisco
//         </Typography>
//       </Box>
//       <Box className={classes.ClimateWrapper}>
//         <div>
//           <Cloud />
//           <Box className={classes.BoxShadowClimate}></Box>
//         </div>
//         <div>
//           <Climate />
//           <Box className={classes.cloudShadow}></Box>
//         </div>
//         <div>
//           <Cloud />
//           <Box className={classes.cloud2Shadow}></Box>
//         </div>
//       </Box>
//     </Box>
//   );
// }
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Container,
  Button,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import logo from '../../../assets/img/logo.png';

import Navbar from './navBar';

const LogoBox = styled(Box)(({ theme }) => ({
  zIndex: 1000,
  [theme.breakpoints.down('md')]: {
    height: 205,
    top: -18,
  },
  [theme.breakpoints.up('md')]: {
    height: 300,
    top: -25,
  },
  [theme.breakpoints.up('lg')]: {
    height: 410,
    top: -34,
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const BtnBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'flex-end',
}));

function Header() {
  //react useState hook pour l'état ouverture/fermeture
  const [open, setState] = React.useState(null);

  const openDrawer = Boolean(open);

  //fonction appelée quand le tiroir s'ouvre ou se ferme
  const toggleDrawer = (open) => (event) => {
    //change l'état de la fonction suivant la valeur de open
    setState(open);
  };

  // const location = useLocation();

  // fonction quand la navigation est active
  const isActive = (path) => {
    // return location.pathname === path ? 'active' : '';
  };

  return (
    <AppBar
      position='static'
      sx={{ margin: 0, backgroundColor: 'primary.main' }}
    >
      <Container maxWidth='xl' disableGutters>
        <Toolbar>
          {/* <Link to='/'> */}
          <LogoBox
            component='img'
            position='absolute'
            alt='Spiderwolf'
            src={logo}
          />
          {/* </Link> */}
          <NavBox component='div' position='static'>
            <Navbar />
          </NavBox>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='ouvrir tiroir'
            onClick={toggleDrawer(true)}
            sx={{
              marginLeft: 'auto',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            //emplacement tiroir
            anchor='right'
            //si ouvert--> afficher tirroir
            open={openDrawer}
            //fonction quand le tiroir se ferme
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: 'secondary.main',
              }}
            >
              {/* en cliquant sur l'icône--> appelle de la fonction toggleDrawer et fermeture du tiroir */}
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon sx={{ color: 'light.main' }} />
              </IconButton>

              <Divider sx={{ mb: 2, borderColor: 'light.main' }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton
                // to={{
                //   pathname: '/',
                //   hash: '#games',
                // }}
                >
                  <ListItemText primary='Jeux' sx={{ color: 'light.main' }} />
                </ListItemButton>

                <ListItemButton
                // to={{
                //   pathname: '/',
                //   hash: '#news',
                // }}
                >
                  <ListItemText
                    primary='Nouveautés'
                    sx={{ color: 'light.main' }}
                  />
                </ListItemButton>

                <ListItemButton
                // to={{
                //   pathname: '/',
                //   hash: '#about',
                // }}
                >
                  <ListItemText
                    primary='A propos de nous'
                    sx={{ color: 'light.main' }}
                  />
                </ListItemButton>
              </Box>

              <BtnBox component='div'>
                <Button
                  //   component={Link}
                  //    to='/account'
                  id='account-login-button'
                  variant='contained'
                  className={isActive('/account')}
                  sx={{
                    m: 1,
                    width: 1,
                    backgroundColor: 'light.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'light.main',
                    },
                    '&.active': {
                      backgroundColor: 'primary.main',
                      color: 'light.main',
                    },
                  }}
                >
                  Se connecter
                </Button>
                {/* <Button
                  component={Link}
                  to="/account"
                  id="account-register-button"
                  variant="contained"
                  className={isActive('/account')}
                  sx={{
                    m: 1,
                    width: 1,
                    backgroundColor: 'light.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'light.main',
                    },
                    '&.active': {
                      backgroundColor: 'primary.main',
                      color: 'light.main',
                    },
                  }}
                >
                  Créer un compte
                </Button> */}
              </BtnBox>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
