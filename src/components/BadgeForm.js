import React from 'react';

class BadgeForm extends React.Component {

    handleChange = (e) => {
        //De esta manera podemos ver en consola el valor de e
        //name imprime literalmente el name que se asigna en el input
        //en este caso: firstName
        console.log({ value: e.target.value, name: e.target.name })

    }

    handleClick = (e) => {
        //De esta manera podemos ver en consola el valor de e
        //name imprime literalmente el name que se asigna en el input
        //en este caso: firstName
        console.log('button was clicked')
    }

    handleSubmit = e => {
        //Esto previene que pase el submit
        e.preventDefault();
        console.log('no')
    }

    render() {
        return <div>
            <h1>New Attendant</h1>
            {/* esto evitará que se envié el formulario, el on submit con el e.preventDefault */}
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="firstName">
                    </input>
                </div>
                <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
    }
}

export default BadgeForm;