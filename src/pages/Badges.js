import React from 'react'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import { Link } from 'react-router-dom'
import Loader from '../pages/Loader'
import api from '../api'
import PageError from '../components/PageError'

class Badges extends React.Component {



    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        //comenzar llamada a la api
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    render() {
        //manejar el estado donde loading sea cierto
        if (this.state.loading == true) {
            return <div className="loader">
                <Loader />
            </div>
        }

        if (this.state.error) {
            return <div>
                <PageError error={this.state.error} />
            </div>
        }

        return <div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link className="btn btn" style={{ backgroundColor: "#F4976C", color: "white" }} to="/badges/new"> Create new badge</Link>
                </div>
                {/* lista de elementos */}

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Badges;