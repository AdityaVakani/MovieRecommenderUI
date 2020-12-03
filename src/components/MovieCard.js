import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({title,year,poster}) {
  const classes = useStyles();
  const addDefaultSrc=(ev)=>{
    ev.target.src = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-204x300.jpg'
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a style={{display: "table-cell"}} href={`http://google.com/search?q=${title}`} target="_blank">
          <img
            onError={addDefaultSrc}
            width="345"
            src={poster}
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
