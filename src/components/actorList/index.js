import React from "react";
import Actor from "../actorCard/";
import Grid from "@material-ui/core/Grid";

const ActorList = ({actors,action}) => {
  let actorCards = actors.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={t.id} actor={t} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;