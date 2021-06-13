import React from "react";
import useStyles from '../style';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const MovieCard = React.memo((props) => {
  const classes = useStyles();
  console.log(`card ${props.id} rendered with rating ${props.rating}`);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.src}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
        <Typography className={classes.raiting} variant="h6">
            {`Raiting : `}<span className={classes.raitingDigit}> {props.rating}</span>
        </Typography>
      </CardContent>
    </Card>
  );
});

export default MovieCard;
