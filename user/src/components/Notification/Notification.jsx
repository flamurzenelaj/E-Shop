import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap'

export class Notification extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
        }
    }

    handleClose = () => {
        this.setState({ show: false })
    };

    handleShow = () => {
        this.setState({ show: true })
    };

    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6>Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-primary m-0">
                                        <i className="fa fa-bell"></i> Date: 22/05/2023 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6>Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-primary m-0">
                                        <i className="fa fa-bell"></i> Date: 22/05/2023 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card">
                                <Card.Body>
                                    <h6>Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-success m-0">
                                        <i className="fa fa-bell"></i> Date: 22/05/2023 | Status: Read</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card">
                                <Card.Body>
                                    <h6>Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-success m-0">
                                        <i className="fa fa-bell"></i> Date: 22/05/2023 | Status: Read</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6><i className="fa fa-bell"></i> Date: 22/05/2023</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6> Woohoo, you're reading this text in a modal!</h6>
                        <p>
                            He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you sang.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}

export default Notification
