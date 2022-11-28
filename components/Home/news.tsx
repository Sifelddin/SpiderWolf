import * as React from 'react';
import {Box, Container, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import Slideshow from "./slideshow";

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 50,
}))

export default function News() {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column',
            }}>
            <StyledBox component="div">
                <Typography variant="h3" sx={{color: 'light.main'}}>
                    Nouveautés
                </Typography>
            </StyledBox>
            <StyledBox component="div">
                <Typography variant="h5" sx={{color: 'light.main'}}>
                    Veuillez découvrir notre sélection de nouveaux jeux.
                </Typography>
            </StyledBox>
            <StyledBox component="div">
                <Slideshow></Slideshow>
            </StyledBox>
        </Container>
    )
}
