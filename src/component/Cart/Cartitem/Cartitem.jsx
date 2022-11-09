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

const Cartitem = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={InsertEmoticon.media.source} />
    </Card>
  );
};

export default Cartitem;
