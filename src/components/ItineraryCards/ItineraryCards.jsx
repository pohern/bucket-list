import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 700,
    width: 550,
    marginBottom: 70,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    width: 90
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  list: {
    width: 200
  }
}));

const ItineraryCards = ({ itineraries, activities }) => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  let path = window.location.pathname;

//   to be changed
  const itinerariesPerCity = [{ _id: "1" }, { _id: "2" }, { _id: "3" }];

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <div className='itineraryCards'>
    <Fragment>
      {itinerariesPerCity.map((itinerary, i) => (
        <Card className={classes.card} key={itinerary._id}>
          <CardContent >
              <p>City Location</p>
              <p>Date</p>
            </CardContent>
          <CardActions >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
            <CardContent>
              <div>ActivitiesList</div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Fragment>
    </div>
  );
};

export default ItineraryCards;

