import React from 'react';
import SimpleTabs from '../Components/Tabs'; 
import Timer from '../Components/Timer';


class Main extends React.Component {
    constructor () {
        super();
    }
    render() {
        return (
        <div className="Scarlet">
        <SimpleTabs></SimpleTabs>
        {/* <Timer></Timer> */}
        </div> 
        )
    }
}

export default Main;