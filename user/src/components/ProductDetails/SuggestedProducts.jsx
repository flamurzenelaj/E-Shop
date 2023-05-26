import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SuggestedProducts() {
  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>YOU MAY ALSO LIKE</h2>
          <p>Some of our Exclusive Collection, You may like.</p>
        </div>

        <Row>
          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                  alt=""
                />

                <Card.Body>
                  <p className="product-name-on-card">
                    Power Back Cover for Samsung Galaxy A11
                  </p>
                  <p className="product-price-on-card">Price : $24</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
              <img
                className="center"
                src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                alt=""
              />

              <Card.Body>
                <p className="product-name-on-card">
                  Power Back Cover for Samsung Galaxy A11
                </p>
                <p className="product-price-on-card">Price : $24</p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
              <img
                className="center"
                src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                alt=""
              />

              <Card.Body>
                <p className="product-name-on-card">
                  Power Back Cover for Samsung Galaxy A11
                </p>
                <p className="product-price-on-card">Price : $24</p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
              <img
                className="center"
                src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                alt=""
              />

              <Card.Body>
                <p className="product-name-on-card">
                  Power Back Cover for Samsung Galaxy A11
                </p>
                <p className="product-price-on-card">Price : $24</p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
              <img
                className="center"
                src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                alt=""
              />

              <Card.Body>
                <p className="product-name-on-card">
                  Power Back Cover for Samsung Galaxy A11
                </p>
                <p className="product-price-on-card">Price : $24</p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className="image-box card">
              <img
                className="center"
                src="https://rukminim1.flixcart.com/image/416/416/kfoapow0/cases-covers/back-cover/k/4/f/power-hybrarma61-original-imafw2zq47gpzrnk.jpeg?q=70"
                alt=""
              />

              <Card.Body>
                <p className="product-name-on-card">
                  Power Back Cover for Samsung Galaxy A11
                </p>
                <p className="product-price-on-card">Price : $24</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SuggestedProducts;
