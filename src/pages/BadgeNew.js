import React from 'react';

import './styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import api from '../api'



class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            avatarUrl: '',
            jobTitle: '',
            gitHub: '',
        },
        isFormValid: true
    };

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
            await api.badges.create(this.state.form)
            this.setState({
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false, error: error
            })
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                gitHub={this.state.form.gitHub}
                                email={this.state.form.email}
                                avatarURL='https://s.gravatar.com/avatar/b9d44d1ba6103026edf7116ac42fc0e3?s=80' />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default BadgeNew;