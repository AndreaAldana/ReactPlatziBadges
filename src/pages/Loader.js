import React from 'react';
import '../components/styles/Loader.css'
import Spinner from '../components/Spinner'

class Loader extends React.Component {
    render() {
        return <div className="load_container">
            <Spinner />
        </div>
    }
}

export default Loader;