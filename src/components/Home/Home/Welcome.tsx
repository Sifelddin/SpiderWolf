import { Box, Container, Typography } from '@mui/material'
import intro from '../../assets/img/intro.png'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '4rem',
    marginRight: '4rem',
  },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
}))

export default function Welcome() {
  return (
    <Container
      maxWidth="xl"
      position="static"
      sx={{
        backgroundColor: 'dark.main',
        backgroundImage: `url(${intro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
      }}
    >
      <StyledBox component="div">
        <StyledTypography
          variant="h2"
          sx={{ color: 'light.main' }}
          gutterBottom
        >
          Bienvenue sur la plateforme SpiderWolf, retrouvez les jeux Pirate's
          Dices et le Royaume Nawakim
        </StyledTypography>
      </StyledBox>
    </Container>
  )
}
