import * as React from 'react';
import {Person, Search} from '@mui/icons-material';
import {Button, Box, Menu, MenuItem} from '@mui/material';
import {styled} from '@mui/material/styles';
import Link from "next/link";
import {useRouter} from "next/router";

const StyledBox = styled(Box)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginLeft: '180px',
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: '200px',
    },
    [theme.breakpoints.up('xl')]: {
        marginLeft: '220px',
    },
}));

export default function Navbar() {
    //react useState hook pour l'état ouverture/fermeture
    const [open, setState] = React.useState(null);

    const openMenu = Boolean(open);
    const idMenu = openMenu ? 'simple-menu' : undefined;

    //fonction appelée quand le menu s'ouvre
    const handleMenuClick = (event: any) => {
        setState(event.currentTarget);
    };
    //fonction appelée quand le menu se ferme
    const handleMenuClose = () => {
        setState(null);
    };

    const router = useRouter()

    // fonction quand la navigation est active
    const isActive = (path: any) => {
           return router.asPath === path ? 'active' : '';
    };

    return (
        <StyledBox component='div' position='static'>

            <Link href="/#games" scroll={true} passHref>
                <Button
                    id="games-button"
                    sx={{color: 'light.main'}}
                    aria-haspopup="false">
                    Jeux
                </Button>
            </Link>

            <Link href="/#news" scroll={true} passHref>
                <Button
                    id="news-button"
                    sx={{color: 'light.main'}}
                    aria-haspopup="false">
                    Nouveautés
                </Button>
            </Link>

            <Link href="/#about" scroll={true} passHref>
                <Button
                    id="news-button"
                    sx={{color: 'light.main'}}
                    aria-haspopup="false">
                    A propos de nous
                </Button>
            </Link>

            <Link href="/login" scroll={false} passHref>
                <Button
                    id="navbar-register-button"
                    variant="contained"
                    aria-haspopup="false"
                    className={isActive('/account')}
                    sx={{
                        borderRadius: 50,
                        backgroundColor: 'light.main',
                        color: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'light.main',
                        },
                        '&.active': {
                            backgroundColor: 'primary.main',
                            color: 'light.main',
                        },
                    }}>
                    Créer un compte
                </Button>
            </Link>

            <Link href="/games" scroll={false} passHref>
                <Button
                    id="search-button"
                    aria-haspopup="false"
                    sx={{color: 'white'}}>
                    <Search sx={{fontSize: '2rem'}}></Search>
                </Button>
            </Link>

            <Box component='div'>
                <Button
                    id={idMenu}
                    aria-controls={openMenu ? 'menu-controls' : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleMenuClick}
                    sx={{color: 'white'}}
                >
                    <Person sx={{fontSize: '2rem'}}></Person>
                </Button>

                <Menu
                    id={idMenu}
                    aria-labelledby='user-menu-button'
                    anchorEl={open}
                    open={openMenu}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Se déconnecter</MenuItem>
                </Menu>
            </Box>

        </StyledBox>
    );
}