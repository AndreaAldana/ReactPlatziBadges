import React from 'react'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import './styles/BadgeDetails.css'

function BadgeDetails(props) {
    const badge = props.badge;

    return <div>
        <div className="text-center">
            <div style={{ textAlign: "center" }}>
                <h1 className="detailstext">¡Hola, {badge.firstName}!</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col" id="details_container">
                        <div className="card">
                            <h2 className="detailstext">Actions</h2>
                            <div>
                                <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Editar</Link></div>
                            </div>
                            <div>
                                <div><button className="btn btn-danger" to={`/badges/${badge.id}/edit`}>Delete Badge</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default BadgeDetails;