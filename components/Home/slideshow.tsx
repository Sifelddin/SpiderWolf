import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import { gameList as data } from '../../datas/gameList.js'

import styles from '../../styles/Carousel.module.scss'

export default function Slideshow(props: any) {
    const items = [
        {
            name: 'Jeux alternatifs',
            caption: '',
            contentPosition: 'left',
            items: data,
        },
        {
            name: 'Jeux alternatif',
            caption: '',
            contentPosition: 'middle',
            items: data,
        },
        {
            name: 'Jeux alternatif',
            caption: '',
            contentPosition: 'right',
            items: data,
        },
    ]

    return (
        <Carousel
            sx={{
                width: {
                    xl: '1200px',
                    lg: '1000px',
                    md: '800px',
                    sm: '600px',
                    xs: '400px',
                },
            }}
        >
            {items.map((item, index) => (
                <Banner item={item} key={item} contentPosition={item.contentPosition} />
            ))}
        </Carousel>
    )
}

const Banner = (props: any) => {
    const contentPosition = props.contentPosition ? props.contentPosition : 'left'
    const totalItems = props.length ? props.length : 3
    const mediaLength = totalItems - 1

    let items = []
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className={styles.Content}>
                <Typography className={styles.Title}>{props.item.name}</Typography>
                <Typography className={styles.Caption}>{props.item.caption}</Typography>
            </CardContent>
        </Grid>
    )

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.items[i]

        const media = (
            <Grid item xs={4} key={item.title}>
                <CardMedia className={styles.Media} image={item.image.src} title={item.title}>
                    <Typography
                        className={styles.MediaCaption}
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block',
                            },
                        }}
                    >
                        {item.title}
                    </Typography>
                </CardMedia>
            </Grid>
        )

        items.push(media)
    }

    if (contentPosition === 'left') {
        items.unshift(content)
    } else if (contentPosition === 'right') {
        items.push(content)
    } else if (contentPosition === 'middle') {
        items.splice(items.length / 2, 0, content)
    }

    return (
        <Card raised className={styles.Banner}>
            <Grid container spacing={0} className={styles.BannerGrid}>
                {items}
            </Grid>
        </Card>
    )
}
