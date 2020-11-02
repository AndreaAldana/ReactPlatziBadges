import React from 'react'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import { Link } from 'react-router-dom'

class Badges extends React.Component {


    constructor(props) {
        super(props);
        console.log('1, constructor');
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log('3, componentDidMount()')

        setTimeout(() => {
            this.setState({
                data: [{
                    id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                    firstName: "Anubis",
                    lastName: "Ali",
                    email: "anubis_ali@gmail.com",
                    jobTitle: "Senior backend developer",
                    gitHub: "Thracium",
                    avatarUrl:
                        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                },
                {
                    id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                    firstName: "Paloma",
                    lastName: "Herrera",
                    email: "pherrera@hotmail.com",
                    jobTitle: "Ui/ux designer",
                    gitHub: "PalomaHerrera",
                    avatarUrl:
                        "https://clevelandschoolsbookfund.org/wp-content/uploads/2019/01/icon-profile-female.png"
                },
                {
                    id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                    firstName: "Catalina",
                    lastName: "Contreras",
                    email: "cata94_@hotmail.com",
                    jobTitle: "QA Analyst",
                    gitHub: "CataDesigns",
                    avatarUrl:
                        "https://www.clementjuniorpreschool.com/wp-content/uploads/2019/04/219969.png"
                }

                ]
            })
        }, 3000)
    }

    render() {
        console.log('2, render ')
        return <div>
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