import React from 'react';
import './styles/BadgeForm.css'
import { Button } from 'react-bootstrap'

class BadgeForm extends React.Component {
    state = {
        isFormValid: true
    };


    //El estate debe inicializarse como un objeto vacío, o buscará los valores de los input
    //los cuales serán null porque aún no existen
    /* state = {} */
    /*  state = {
         firstName: '',
         lastName: '',
         email: '',
         jobTitle: '',
         twitter: ''
     }; */
    /* también se puede inicializar el valor directamente un state
    en este caso el input firstName inicia con el valor Andrea */
    /*  firstName: 'Andrea' */

    /* handleChange = (e) => {
        De esta manera podemos ver en consola el valor de e
        name imprime literalmente el name que se asigna en el input
        en este caso: firstName
        console.log({ value: e.target.value, name: e.target.name }) 
        this.setState({
            El e.target.name es para recibir cada name de cada input
            y el value para recibir su valor
            [e.target.name]: e.target.value
        })
    } */

    handleClick = (e) => {
        //De esta manera podemos ver en consola el valor de e
        //name imprime literalmente el name que se asigna en el input
        //en este caso: firstName
        console.log('button was clicked')
    }

    isNotEmpty = () => {


        if ((this.props.formValues.firstName === '' || this.props.formValues.lastName === '' || this.props.formValues.jobTitle === ''
            || this.props.formValues.twitter === '' || this.props.formValues.email === '')) {
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


        return <div className="card">

            {/* esto evitará que se envié el formulario, el on submit con el e.preventDefault */}
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="Ingrese su nombre"
                        required
                        value={this.props.formValues.firstName}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Ingrese su apellido"
                        required
                        value={this.props.formValues.lastName}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Ingrese su email"
                        required
                        value={this.props.formValues.email}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        placeholder="Ingrese su profesión"
                        required
                        value={this.props.formValues.jobTitle}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Github</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="twitter"
                        placeholder="Ingrese su usuario de twitter"
                        required
                        value={this.props.formValues.twitter}>
                    </input>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button className="btn btn mr-1"
                        style={{ backgroundColor: "#F4976C", color: "white" }} type="submit" onClick={this.handleClick} >Submit</Button>
                </div>

                {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                )}

            </form>
        </div>
    }
}

export default BadgeForm;