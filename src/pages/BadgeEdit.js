import React from 'react';

import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import Loader from '../pages/Loader'


class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            avatarUrl: '',
            jobTitle: '',
            twitter: '',
        },
    };


    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                //esto se hace para que se haga una copia cada vez que se 
                //escriba un dato en un input, y así no se sobreescriba un valor sobre otro
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }


    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true, error: null
        })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({
                loading: false
            });
            this.props.history.push('/badges')

        } catch (error) {
            this.setState({
                loading: false, error: error
            })
        }
    }


    render() {
        if (this.state.loading) {
            return <div>
                <Loader />
            </div>
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <Badge firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarURL='https://s.gravatar.com/avatar/b9d44d1ba6103026edf7116ac42fc0e3?s=80' />
                        </div>
                        <div className="col-6">
                            <h1 className="form_title">Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default BadgeEdit;