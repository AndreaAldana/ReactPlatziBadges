import React from 'react';

import './styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
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
        if ((this.state.form.firstName === '' || this.state.form.lastName === '' || this.state.form.jobTitle === ''
            || this.state.form.gitHub === '' || this.state.form.email === '')) {
            this.setState({
                isFormValid: true
            })
        } else {
            this.setState({
                isFormValid: false
            })
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} gitHub={this.state.form.gitHub} email={this.state.form.email} />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} verifyInputs={this.state.isFormValid} />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default BadgeNew;