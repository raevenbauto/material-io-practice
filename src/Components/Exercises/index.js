import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const style ={
    Paper:{
        padding: 30,
        marginTop: 10,
        marginBottom: 10
    }
};


export default ({exercises}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={style.Paper} >
                {
                    exercises.map(([group, exercises]) =>
                        <Fragment>
                            <Typography
                                variant="h5"
                                style={{textTransform: 'uppercase'}}>
                                {group}
                            </Typography>
                                <List>
                                    {
                                        exercises.map(({title}) =>
                                            <ListItem button>
                                                <ListItemText primary={title}/>
                                            </ListItem>
                                        )
                                    }
                                </List>

                        </Fragment>
                    )
                }
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper} >
                This will be the description of the workout test.
            </Paper>
        </Grid>
    </Grid>