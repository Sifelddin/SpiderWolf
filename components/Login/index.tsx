import * as React from "react";
import {Box, Container} from '@mui/material'

import forest from '../../assets/img/dark-forest.png'
import {styled} from "@mui/material/styles";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const StyledHeading = styled('h4')(({theme}) => ({
    color: 'white',
    fontSize: '1.5rem',
    paddingBottom: '2rem',
}))

function LoginComponent() {
    return (
        <Box
            component="main"
            position="static"
            sx={{
                backgroundColor: 'dark.main',
                backgroundImage: `url(${forest.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <Container
                sx={{
                    textAlign: 'center',
                    pt: '5rem',
                }}
            >
                <StyledHeading>Se connecter</StyledHeading>

                {/* Login pour les utilisateurs enrégistrés */}
                <LoginForm/>

                <StyledHeading>Ou</StyledHeading>
                <StyledHeading>Créer un compte</StyledHeading>

                {/* Register form pour les nouveau utilisateurs */}
                <RegisterForm/>
            </Container>
        </Box>
    )
}

export default LoginComponent