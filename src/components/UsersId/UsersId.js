import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const UsersId = (props) => {
    const { user, showDetailsHandler } = props;
    const { id } = user;
    // console.log(id);
    const classes = useStyles();
    return (
        <div>
            {/* <button onClick={() => showDetailsHandler(user)}>Show Details</button> */}
            <Card className={classes.root} variant="outlined">
                <CardContent>

                    <Typography variant="h5" component="h1" color="primary">
                        Post Number:{id}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/user/${id}`}>
                        <Button variant="contained" color="secondary">
                            Show Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>

        </div>


    );
};

export default UsersId;