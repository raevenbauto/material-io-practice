import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({muscles, onSelect, category}) => {

    const categoryIndex = category
        ? muscles.findIndex(muscleGroup => muscleGroup === category) + 1
        : 0;

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? "" : muscles[index - 1])
    };


    return (
        <Paper>
            <Tabs
                value={categoryIndex}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={onIndexSelect}>

                <Tab label="All" />
                {
                    muscles.map(muscle => (
                        <Tab key={muscle} label={muscle} />
                    ))
                }
            </Tabs>
        </Paper>
        )
}

