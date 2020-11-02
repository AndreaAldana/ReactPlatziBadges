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
                                    <div className="user__icon"></div>
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                </div>
                                <br />
                                <div>
                                    <div className="git__icon"></div>
                                    <span>{badge.gitHub}</span>

                                </div>
                                <br />
                                <div>
                                    <div className="job__icon"></div>
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