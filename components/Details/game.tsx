import * as React from 'react';
import { Box, Button, Link, Grid, Stack, Typography } from '@mui/material'

export default function Game({ game, ...props }: any) {
    return (
        <Stack
            direction={{ sm: 'column', md: 'row' }}
            justifyContent="space-between"
            textAlign={{ sm: 'center', md: 'left' }}
        >
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flex: 1,
                    my: 5,
                }}
            >
                <Grid item xs={4} sx={{ mx: { sm: 0, md: 5 } }}>
                    <img src={game.image.src} alt="" width="100%" height="auto" />
                </Grid>
            </Box>
            <Box component="div" sx={{ flex: 1, my: 5, color: 'light.main' }}>
                <Typography variant="h3" component="h1" sx={{ mb: 5 }}>
                    {game.title.toUpperCase()}
                </Typography>
                <Box>
                    <Typography variant="h6" component="h5">
                        DEVELOPPEUR:{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {game.developer}
                        </Box>
                    </Typography>
                    <Typography variant="h6" component="h5">
                        EDITEUR:{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {game.editor}
                        </Box>
                    </Typography>
                    <Typography variant="h6" component="h5">
                        DATE DE SORTIE:{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {game.release_date}
                        </Box>
                    </Typography>
                    <Typography variant="h6" component="h5">
                        GENRE:{' '}
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {game.genre}
                        </Box>
                    </Typography>
                </Box>
                <Button
                    id="details-game-button"
                    variant="contained"
                    aria-haspopup="false"
                    sx={{
                        mt: 5,
                        borderRadius: 3,
                    }}
                >
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        JOUER
                    </Typography>
                </Button>
            </Box>
        </Stack>
    )
}