import React from 'react'
import './styles/AboutUs.css'
import { Card, Button } from 'react-bootstrap'
import chatty from '../images/Groupchat.svg'
import connections from '../images/connections.svg'
import updated from '../images/updated.svg'

class AboutUs extends React.Component {
    render() {
        return <div>
            <div className="container">
                <div className="row" id="cards">
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={chatty} />
                            <Card.Body>
                                <Card.Title>Share your ideas and thoughs</Card.Title>
                                <Card.Text>
                                    Don't be afraid to say what you think about a topic. Opinions and ideas change the world.
    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={connections} />
                            <Card.Body>
                                <Card.Title>Create connections</Card.Title>
                                <Card.Text>
                                    Meet colleagues with the same interests as you. Be in contact with famous people in TI.
    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={updated} />
                            <Card.Body>
                                <Card.Title>Always updated</Card.Title>
                                <Card.Text>
                                    Our conferences keep up with the latest advances in technology so you wont miss a thing about it.
    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AboutUs