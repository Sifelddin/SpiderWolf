import * as React from 'react';
import {
    Container,
    Box,
    Typography,
    Stack,
    CardContent,
    Card,
    CardActionArea,
    Link,
} from '@mui/material'
import {styled} from '@mui/material/styles'
import {gameList as data} from '../../datas/gameList.js'
import {useRouter} from "next/router";
import Image from 'next/image'

const StyledContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
}))

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
}))

const StyledImage = styled(Image)(({}) => ({
    display: 'block',
    width: '100%',
    objectFit: 'cover',
    height: '200px'
}))

function Games() {
    const router = useRouter()
    return (
        <StyledContainer>
            <StyledBox component="div">
                <Typography
                    variant="h3"
                    sx={{color: 'primary.main', mb: 10}}
                    gutterBottom
                >
                    Nos Jeux
                </Typography>
            </StyledBox>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={10}>
                {data.map((v) => {
                    return (
                        <Card sx={{maxWidth: 345}} key={v.id}>
                            <CardActionArea
                                component={Link}
                                onClick={() => router.push(`/games/${v.id}`)}
                            >
                                <Box component="div" style={{objectFit: 'fill'}}>
                                    <StyledImage
                                        alt={v.title}
                                        src={v.image.src}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'primary.main', textAlign: 'center'}}
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
