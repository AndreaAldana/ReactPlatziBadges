import './styles/Loader.css'
import React from 'react'

class Spinner extends React.Component {
    render() {
        return <div>
            <div class="lds-heart">
                <div></div>
            </div>
        </div>
    }
}

export default Spinner;