import {
  Container,
  Box,
  Typography,
  Stack,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Link,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import { gameList as data } from '../../datas/gameList.js'

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
}))

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
}))

function Games() {
  let navigate = useNavigate()
  const handleCardClick = (id) => {
    navigate('/games/' + id)
  }

  return (
    <StyledContainer id="container" maxWidth="xl" position="static">
      <StyledBox component="div">
        <Typography
          variant="h3"
          sx={{ color: 'primary.main', mb: 10 }}
          gutterBottom
        >
          Nos Jeux
        </Typography>
      </StyledBox>
      <Stack direction="row" spacing={10}>
        {data.map((v) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={v.id}>
              <CardActionArea
                component={Link}
                onClick={() => handleCardClick(v.id)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={v.image}
                  alt={v.title}
                  sx={{ objectFit: 'fill' }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: 'primary.main', textAlign: 'center' }}
                  >
                    {v.short_description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
    </StyledContainer>
  )
}

export default Games
