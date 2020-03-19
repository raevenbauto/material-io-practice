import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateExerciseDialog from "../Exercises/Dialog/CreateExerciseDialog";

export default () =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{flex: 1}}>
                Workout App
            </Typography>

            <CreateExerciseDialog />
        </Toolbar>
    </AppBar>
