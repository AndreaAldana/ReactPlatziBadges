import React from 'react';
import Loader from '../pages/Loader';
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'


class BadgeDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error });
        }

    }


    render() {

        const badge = this.state.data
        if (this.state.loading) {
            return <Loader />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return <BadgeDetails badge={badge} />
    }
}
export default BadgeDetailsContainer;