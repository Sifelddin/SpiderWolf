import * as React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material'

export default function Related({ games, ...props }: any) {
    return ( <Stack direction="column" justifyContent="space-between" textAlign="center">
        <Box
            component="div"
            sx={{
                flex: 1,
                color: 'light.main',
                my: 5,
            }}
        >
            <Typography variant="h3" component="h2">
                Autres Jeux
            </Typography>
        </Box>
        <Stack
            direction={{ sm: 'column', md: 'row' }}
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            {games.map((k: any) => (
                <Box
                    sx={{ flex: 1, mb: 5, p: 2 }}
                    key={k.id}
                >
                    <Paper
                        sx={{
                            backgroundImage: `url(${k.image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            height: '300px',
                            '&:hover': {
                                boxShadow: '0 10px 71px rgba(47,91,234,.175)',
                                transform: 'scale(1.1)',
                                cursor: 'pointer',
                            },
                            transition: 'transform 0.3s',
                        }}
                    ></Paper>
                </Box>
            ))}
        </Stack>
    </Stack>)
}