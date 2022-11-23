import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Grid, CardContent, Typography, CardMedia, Card } from '@mui/material'

import './carousel.scss'

import { gameList as data } from '../../datas/gameList.js'

export default function Slideshow(props) {
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
      className="carousel"
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

const Banner = (props) => {
  const contentPosition = props.contentPosition ? props.contentPosition : 'left'
  const totalItems = props.length ? props.length : 3
  const mediaLength = totalItems - 1

  let items = []
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.name}</Typography>
        <Typography className="Caption">{props.item.caption}</Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.items[i]

    const media = (
      <Grid item xs={4} key={item.title}>
        <CardMedia className="Media" image={item.image} title={item.title}>
          <Typography
            className="MediaCaption"
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
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}
