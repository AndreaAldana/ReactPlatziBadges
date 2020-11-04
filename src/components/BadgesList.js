import React from 'react'
import './styles/BadgeList.css'
import { Link } from 'react-router-dom'
import Gravatar from "./Gravatar";

function BadgesList(props) {


    const [query, setQuery] = React.useState('')


    const badges = props.badges;

    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(
        () => {
            const result = badges.filter(badge => {
                return `${badge.firstName} ${badge.lastName}`
                    .toLowerCase()
                    .includes(query.toLowerCase());
            })

            setFilteredBadges(result)
        }, [badges, query]);


    if (filteredBadges.length == 0) {
        return <div className="text-center" style={{ height: "20pc" }}>
            <div>
                <div className="form-group">
                    <label>Filter badges</label>
                    <input value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className="form-control" />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn mb-4" style={{ backgroundColor: "#F4976C", color: "white" }} to="/badges/new"> Create new badge</Link>

            </div>
        </div>
    }

    const badgesList = badges.reverse();
    return <ul className="list-unstyled" >
        <div className="form-group">
            <label>Filter badges</label>
            <input value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                type="text"
                className="form-control" />
        </div>
        {/*   se recorre el arreglo */}


        {filteredBadges.map((badge) => {

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
                                    className="btn btn mr-1"
                                    style={{ backgroundColor: "#F4976C", color: "white" }}
                                    to={`/badges/${badge.id}`}>
                                    Details
                        </Link>
                            </div>
                        </div>
                    </li>
                </div>

            )
        })}
    </ul>
}

export default BadgesList