import React from 'react'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import { Link } from 'react-router-dom'

class Badges extends React.Component {
    state = {
        data: [{
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Typhlosion",
            lastName: "",
            email: "Typhlosion@gmail.com",
            jobTitle: "Pokémon tipo Fuego",
            gitHub: "Segunda generación",
            avatarUrl:
                "https://24.media.tumblr.com/tumblr_m2x5nxDthL1qgd7tso3_250.gif"
        },
        {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Lucario",
            lastName: "",
            email: "Lucario@hotmail.com",
            jobTitle: "Pokémon tipo Acero y Lucha",
            gitHub: "Cuarta generación",
            avatarUrl:
                "https://pa1.narvii.com/5796/60fd631be2ffd626367e09a06c099a2c58616eed_00.gif"
        },
        {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Dragonite",
            lastName: "",
            email: "dragonite@hotmail.com",
            jobTitle: "Pokémon tipo Dragón",
            gitHub: "Primera generación",
            avatarUrl:
                "https://thumbs.gfycat.com/SlushyEllipticalFlyinglemur-small.gif"
        }

        ]
    };

    render() {
        return <div>

            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">

                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>
                {/* lista de elementos */}

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Badges;