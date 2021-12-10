import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import img from '../../images/tv-poster-placeholder.png'
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";



const useStyles = makeStyles({
  card: { background: "black", maxWidth: 400, color: "white" },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(0, 255, 0)",
  },
});

export default function ActorCard({actor}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} title={actor.name} />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
       
      <Grid container>
         
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity} {"Popularity "}
            </Typography>
          </Grid>
        </Grid>
        
        
      </CardContent>
      <CardActions disableSpacing>
      <Link to={`/actor/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}