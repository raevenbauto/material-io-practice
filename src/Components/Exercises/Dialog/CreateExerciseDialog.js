import React, {Component, Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";

class CreateExerciseDialog extends Component{

    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            }
        })
    };

    render(){
        const {open} = this.state;

        return (
            <Fragment>
                <Fab color="default" size="small" onClick={this.handleToggle}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={this.handleToggle}>
                    <DialogTitle id="alert-dialog-slide-title">Create a new exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Please fill out the form below.
                        </DialogContentText>

                        <form>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default CreateExerciseDialog;