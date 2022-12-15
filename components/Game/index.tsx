import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {useForm, Controller} from 'react-hook-form';
import {gameList} from "../../datas/gameList";
import usePagination from "./pagination";
import {useRouter} from 'next/router';
import Image from "next/image";
import {
    Box,
    CardMedia,
    Container,
    Stack,
    Typography,
    Pagination,
    List,
    ListItem,
    Card,
    CardActionArea, CardContent, TextField
} from "@mui/material";
import darkForest from "../../assets/img/dark-forest.png";
import search from "../../assets/icons/search.svg";
import logo from "../../assets/img/spiderwolf-logo-02.png";
import styles from '../../styles/Pagination.module.scss';

function GamesComponent() {
    const router = useRouter();
    const {control} = useForm()

    let [page, setPage] = useState(1)
    const PER_PAGE = 4

    let [data, setData] = useState(gameList)

    const _DATA = usePagination(data, PER_PAGE)

    const count = useRef(0)

    count.current = Math.ceil(data.length / PER_PAGE)

    // changement de la page de navigation
    const handleChange = (e: any, p: any) => {
        setPage(p)
        _DATA.jump(p)
    }

    const [textValue, setTextValue] = React.useState(null)

    const onTextChange = (e: any) => {
        setTextValue(e.target.value)

        if (!textValue) {
            return
        }
        const re = textValue

        // filtrer la liste avec un argument
        let temp_data = gameList.filter(
            (obj) =>
                obj.title.toLowerCase().includes(re) ||
                obj.description.toLowerCase().includes(re) ||
                obj.short_description.toLowerCase().includes(re)
        )

        // changement des données de la liste
        count.current = Math.ceil(temp_data.length / PER_PAGE)
        setData(temp_data)
        _DATA.setData(data)
    }

    const handleCardClick = (id: any) => {
        router.push('/games/' + id).then()
    }

    return (
        <Box component="main" position="static">
            <Box
                component="section"
                id="details"
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
                <Container sx={{py: 5}}>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        textAlign="center"
                    >
                        <Box component="div" sx={{flex: 1, my: 5}}>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{color: 'light.main'}}
                            >
                                Bibliothèque de jeux
                            </Typography>
                            <Controller
                                name="q"
                                control={control}
                                rules={{required: 'required'}}
                                render={({field, fieldState: {error}}: any) => (
                                    <TextField
                                        {...field}
                                        onChange={onTextChange}
                                        size="large"
                                        variant="filled"
                                        className={styles.search__input}
                                        sx={[
                                            {
                                                '&>div>input': {
                                                    backgroundImage: `url(${search.src})`,
                                                    backgroundRepeat: `no-repeat`,
                                                }
                                            }
                                        ]}
                                    />
                                )}
                            />
                        </Box>
                        <Box component="div" sx={{flex: 1, my: 5}}>
                            <List>
                                {_DATA.currentData().map((v: any) => {
                                    return (
                                        <ListItem key={v.id} sx={{my: 5}}>
                                            <Card>
                                                <CardActionArea
                                                    onClick={() => handleCardClick(v.id)}
                                                    sx={{
                                                        display: 'flex',
                                                        backgroundColor: 'light.main',
                                                        flexDirection: {
                                                            xs: 'column',
                                                            md: 'row'
                                                        }
                                                    }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="200"
                                                        image={v.image.src}
                                                        alt={v.title}
                                                        sx={{objectFit: 'fill', maxWidth: 345}}
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: 'primary.main',
                                                                float: 'left',
                                                                marginLeft: {
                                                                    xs: 0,
                                                                    md: 5
                                                                },
                                                                textAlign: 'justify'
                                                            }}>
                                                            {v.description}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Box
                                component="div"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flex: 1,
                                    mb: 5,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{width: '100px', height: '100px'}}
                                    image={logo.src}
                                    alt="Spiderwolf logo"
                                >
                                </CardMedia>
                            </Box>
                            <Pagination
                                className={styles.pagination}
                                count={count.current}
                                size="large"
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                            />
                        </Box>
                    </Stack>
                    <Box sx={{height: '300px'}}></Box>
                </Container>
            </Box>
        </Box>
    )
}

export default GamesComponent