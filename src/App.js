import React, {Component, Fragment} from 'react';
import Exercise from "./Components/Exercises"
import {muscles, exercises} from "./Components/store";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

class App extends Component {
    state = {
        exercises,
        category: "",
        currExercise: {}
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

    handleCategorySelect = category => {
        this.setState({
            category
        })
    };

    handleExerciseSelect = id => {
        this.setState((prevState) => ({
            currExercise: prevState.exercises.find(exercise => exercise.id === id)
        }))
    };

    render(){
        const {category, currExercise} = this.state;
        return(
            <Fragment>
                <Header/>
                <Exercise
                    currExercise={currExercise}
                    exercises={this.getExerciseByMuscle()}
                    category={category}
                    onSelect={this.handleExerciseSelect}/>
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}/>
            </Fragment>
        )
    }
}

export default App;
