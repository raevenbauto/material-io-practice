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
        margin: 10,
        height: 500,
        overflow: "auto"
    }
};

export default ({
    exercises,
    category,
    onSelect,
    currExercise: {
        title = "Welcome!",
        description = "This is the description of the exercise"}}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={style.Paper}>
                {
                    exercises.map(([group, exercises]) =>
                        !category || group === category
                            ? <Fragment key={group}>
                                <Typography
                                    variant="h5"
                                    style={{textTransform: 'uppercase'}}>
                                    {group}
                                </Typography>
                                <List>
                                    {
                                        exercises.map(({title, id}) =>
                                            <ListItem
                                                key={id}
                                                onClick={() => onSelect(id)}
                                                button>
                                                <ListItemText primary={title}/>
                                            </ListItem>
                                        )
                                    }
                                </List>

                            </Fragment>
                            : null
                    )
                }
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper} >
                This is my test.
                <Typography
                    variant="h3">
                    {title}
                </Typography>

                <Typography
                    variant="display1">
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>