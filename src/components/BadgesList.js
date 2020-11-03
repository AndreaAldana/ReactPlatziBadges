import React from 'react'
import './styles/BadgeList.css'
import { Link } from 'react-router-dom'
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length == 0) {
            return <div className="text-center" style={{ height: "20pc" }}>
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new"> Create new badge</Link>
                </div>
            </div>
        }
        const badgesList = [...this.props.badges].reverse();
        return <ul className="list-unstyled" >
            {/*   se recorre el arreglo */}

            {badgesList.map((badge) => {

                return (
                    //Esto es para que las reconozca por id y tengan su key
                    <div className="whole-element">


                        <li key={badge.id} className="Badge__card">
                            <Gravatar email={badge.email} alt="" className="BadgesListItem__avatar" />
                            <div className="Badges__letters">

                                <div>
                                    <div className="user__icon"></div>
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                </div>
                                <br />
                                <div>
                                    <div className="git__icon"></div>
                                    <span>{badge.twitter}</span>

                                </div>
                                <br />
                                <div>
                                    <div className="job__icon"></div>
                                    <span>{badge.jobTitle}</span>

                                </div>
                                <div style={{ paddingTop: "2em" }}>
                                    <Link
                                        className="btn btn-primary mr-1"
                                        to={`/badges/${badge.id}/edit`}>
                                        Edit
                        </Link>
                                </div>
                            </div>
                        </li>
                    </div>

                )
            })}
        </ul>
    }
}

export default BadgesList