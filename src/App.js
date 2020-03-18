import React, {Component, Fragment} from 'react';
import Exercise from "./Components/Exercises"
import {muscles, exercises} from "./Components/store";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

class App extends Component {
    state = {
        exercises,
        category: ""
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

    render(){
        return(
            <Fragment>
                <Header/>
                <Exercise exercises={this.getExerciseByMuscle()}/>
                <Footer
                    category={this.state.category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}/>
            </Fragment>
        )
    }
}

export default App;
