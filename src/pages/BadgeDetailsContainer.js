import React from 'react';
import Loader from '../pages/Loader';
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import './styles/BadgeDetails.css'
import api from '../api'
import { Modal, Button } from 'react-bootstrap'

class BadgeDetailsContainer extends React.Component {



    state = {
        loading: true,
        error: null,
        data: undefined,
        show: false,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error });
        }

    }

    toggleModalOpen = () => {
        this.setState({
            show: true
        });
    }

    toggleModalClose = () => {
        this.setState({
            show: false
        });
    }

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    modalOpen = () => {

        return <Modal show={this.state.show} onHide={this.toggleModalClose}>
            <Modal.Header closeButton style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <h1>Oh no...</h1>
                </div>
            </Modal.Header>
            <Modal.Body className="text-center">¿Are you really sure you want to delete this badge?</Modal.Body>
            <Modal.Footer>
                <Button style={{ backgroundColor: "#F4976C", color: "white" }} onClick={this.toggleModalClose}>
                    ¡No!
          </Button>
                <Button style={{ backgroundColor: "#303C6C", color: "white" }} onClick={this.handleDeleteBadge}>
                    ¡Yes!
          </Button>
            </Modal.Footer>
        </Modal>

    }



    render() {


        const badge = this.state.data

        if (this.state.loading) {
            return <Loader />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

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
                                    <div><Link style={{ backgroundColor: "#F4976C", color: "white" }}
                                        className="btn btn mb-4"
                                        to={`/badges/${badge.id}/edit`}>Editar</Link>
                                    </div>
                                </div>


                                <div>
                                    <button className="btn btn" style={{ backgroundColor: "#303C6C", color: "white" }} onClick={this.toggleModalOpen}>Delete Badge</button>

                                </div>

                            </div>
                            {this.state.show &&
                                this.modalOpen()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default BadgeDetailsContainer;