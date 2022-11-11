import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import { InsertEmoticon } from "@material-ui/icons";

const Cartitem = ({ item }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={InsertEmoticon.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.CardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}></div>
      </CardActions>
    </Card>
  );
};

export default Cartitem;
