import React, {Component, Fragment} from 'react';
import Exercise from "./Components/Exercises"
import {muscles, exercises} from "./Components/store";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

class App extends Component {
    state = {
        exercises
    };

    getExerciseByMuscle  = () => {
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise;

            exercises[muscles] = exercises[muscles]
                ? [...exercises[muscles], exercise]
                : [exercise];

            return exercises;
        }, {}));
    };

    render(){
        return(
            <Fragment>
                <Header/>
                <Exercise exercises={this.getExerciseByMuscle()}/>
                <Footer muscles={muscles}/>
            </Fragment>
        )
    }
}

export default App;
