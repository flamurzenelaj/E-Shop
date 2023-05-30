import React, { Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ForgetImg from "../../assets/images/forget.jpg";


function ResetPassword() {
  return (
    <Fragment>
    <Container>
      <Row className="p-2">
        <Col
          className="shadow-sm bg-white mt-2"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Row className="text-center">
            <Col
              className="d-flex justify-content-center"
              md={6}
              lg={6}
              sm={12}
              xs={12}
            >
              <Form className="onboardForm">
                <h4 className="section-title-login">Reset Password</h4>

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Enter Your Pin Code"
                />

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Enter Your Email"
                />

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Your New Password"
                />

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Confirm Your Password"
                />
                <Button className="btn btn-block m-2 site-btn-login">
                  {" "}
                  Reset Password{" "}
                </Button>
               </Form>
            </Col>
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
            <img className="onboardBanner" src={ForgetImg} alt="1" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Fragment>
  )
}

export default ResetPassword