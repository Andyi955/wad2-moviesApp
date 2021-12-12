import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import Flag from '@material-ui/icons/Flag';
import DateRange from '@material-ui/icons/DateRange';

//import Drawer from "@material-ui/core/Drawer";
//import MovieReviews from "../movieReviews"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ( {actor}) => {
  const classes = useStyles();
 // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
       <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" className={classes.root}>
      <Chip icon={<AccountCircle />} label={`${actor.name}.`} />
        <Chip icon={<Flag />} label={actor.place_of_birth} />
        <Chip icon={<DateRange />} label={actor.birthday} />



      
     
   
      </Paper>

      
      </>
  );
};
export default  ActorDetails ;