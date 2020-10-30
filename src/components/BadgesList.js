import React from 'react'
import './styles/BadgeList.css'

class BadgesList extends React.Component {
    render() {
        return <ul className="list-unstyled" >
            {/*   se recorre el arreglo */}
            {this.props.badges.map((badge) => {
                return (
                    //Esto es para que las reconozca por id y tengan su key
                    <div className="whole-element">
                        <li key={badge.id} className="Badge__card">
                            <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar" />
                            <div className="Badges__letters">

                                <div>
                                    <span className="poke__icon"></span>
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                </div>
                                <br />
                                <div>
                                    <span className="small__icon"></span>
                                    <span>{badge.gitHub}</span>

                                </div>
                                <br />
                                <div>
                                    <span className="poke2__icon"></span>
                                    <span>{badge.jobTitle}</span>

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