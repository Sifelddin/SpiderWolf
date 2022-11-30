import * as React from 'react';
import {
    Container,
    Button,
    Box,
    Grid,
    Typography,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import Link from "next/link";
import Image from 'next/image'
import logo from '../../assets/img/footer-img.png';

const StyledBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        minHeight: 'calc(100% + 220px)',
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 'calc(100% + 100px)',
    },
}))

const StyledImage = styled(Image)(({theme}) => ({
    zIndex: 1000,
    [theme.breakpoints.down('md')]: {
        position: 'static !important',
        width: 'auto !important',
        height: '313px !important',
    },
    [theme.breakpoints.up('md')]: {
        position: 'absolute !important',
        marginRight: '50px !important',
        marginTop: '-100px !important',
        width: 'auto !important',
        height: '313px !important',
        right: '0px !important',
    },
    [theme.breakpoints.up('lg')]: {
        position: 'absolute !important',
        marginRight: '100px !important',
        marginTop: '-200px !important',
        width: 'auto !important',
        height: '413px !important',
        right: '0px !important',
    },
    [theme.breakpoints.up('xl')]: {
        position: 'absolute !important',
        marginRight: '200px !important',
        marginTop: '-300px !important',
        width: 'auto !important',
        height: '513px !important',
        right: '0px !important',
    },
}))


function FooterComponent() {
    return (
        <StyledBox component="footer" position="static" sx={{margin: 0, backgroundColor: 'primary.main'}}>
            <Container maxWidth="xl">
                <Grid container spacing={0}>
                    <Grid item sm={12} md={3}>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                alignItems: 'start',
                                flexDirection: 'column',
                                m: '4rem 2rem',
                            }}>
                            <Box sx={{mb: 5}}>
                                <Link href="/" scroll={true} passHref>
                                    <Button sx={{fontWeight: 600, color: 'light.main'}} aria-haspopup="false">
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                        >
                                            SPIDERWOLF
                                        </Typography>
                                    </Button>
                                </Link>

                            </Box>
                            <Box sx={{mb: 3}}>
                                <Link href="/" scroll={true} passHref>
                                    <Button sx={{fontWeight: 400, color: 'light.main'}}>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                        >
                                            SUPPORT
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                            <Box sx={{mb: 3}}>
                                <Link href="/" scroll={true} passHref>
                                    <Button sx={{fontWeight: 400, color: 'light.main'}}>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                        >
                                            POLITIQUE DE CONFIDENTIALITE
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <Box sx={{display: 'flex'}}>
                            <Link href="/" scroll={true} passHref>
                                <StyledImage
                                    src={logo.src}
                                    alt="Spiderwolf"
                                    width={885}
                                    height={770} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledBox>
    )
}

export default FooterComponent
