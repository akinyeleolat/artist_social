import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from '../../styles';

const ArtistCard = (artist) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (artist) {
    const {
      id, name, phone, email, website, company,
      address
    } = artist.artist;
    return (
      <Fragment>
        <Card key={id} className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={company.name}
        subheader={website}
      />
      <CardContent className = {classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>
              {email}
            </Typography>
            <Typography>
              {phone}
            </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
           <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Company:</Typography>
          <Typography>
              {company.name}
            </Typography>
          <Typography>
           {company.catchPhrase}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">Address:</Typography>
          <Typography>
              {address.street}, 
              {address.suite},
              <br/>
              {address.city}, {address.zipcode}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                      View
            </Button>
            <Button size="small" color="primary">
                      Edit
            </Button>
          </CardActions>
      </Collapse>
        </Card>
      </Fragment>
    );
  }
  return 'No Artist fetched';
};

export default ArtistCard;