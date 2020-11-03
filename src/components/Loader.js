import React from 'react';
import spinner from '../images/spinner.svg'

class Loader extends React.Component {
    render() {
        return <div>
            <img src={spinner} alt="" style={{ alignContent: "center" }}></img>
        </div>
    }
}

export default Loader;