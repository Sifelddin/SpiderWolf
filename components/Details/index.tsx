import * as React from 'react';
import { useRouter } from 'next/router'
import {Box, Container, Stack} from "@mui/system";
import {Typography} from "@mui/material";
import {gameList as data} from "../../datas/gameList";
import darkForest from '../../assets/img/dark-forest.png'
import Game from "./game";
import Related from "./related";

function DetailsComponent() {
    const router = useRouter()
    const { id } = router.query
    const pid = parseInt(typeof id === 'string' ? id : '1')

    return (
        <Box component="main" position="static">
            <Box
                component="section"
                id="game-details"
                position="static"
                sx={{
                    backgroundColor: 'dark.main',
                    backgroundImage: `url(${darkForest.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '100%',
                    py: 5,
                }}
            >
                <Container sx={{ py: 5 }}>
                    {data.map((v) =>
                        v.id === pid ? (
                            <div key={v.id}>
                                <Game game={v}></Game>
                                <Stack direction="column" justifyContent="space-between" textAlign="center">
                                    <Box
                                        component="div"
                                        sx={{
                                            flex: 1,
                                            color: 'light.main',
                                            my: 5,
                                        }}
                                    >
                                        <Typography variant="h3" component="h2">
                                            A propos du jeu
                                        </Typography>
                                    </Box>
                                    <Box
                                        component="div"
                                        sx={{
                                            flex: 1,
                                            color: 'light.main',
                                            my: 5,
                                        }}
                                    >
                                        <Typography variant="body1">{v.description}</Typography>
                                    </Box>
                                    <Box
                                        component="div"
                                        sx={{
                                            my: 5,
                                            marginRight: 'auto',
                                            marginLeft: 'auto',
                                        }}
                                    >
                                    </Box>
                                </Stack>
                                <Related
                                    games={data.filter((item) => item.id !== v.id)}
                                ></Related>
                            </div>
                        ) : null
                    )}
                    <Box sx={{ height: '300px' }}></Box>
                </Container>
            </Box>
        </Box>
    )
}

export default DetailsComponent