import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
function FeaturedProducts() {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark("/featured"))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {});
  }, []);

  const FeaturedList = ProductData;
  const MyView = FeaturedList.map((featuredlist, i) => {
    if (featuredlist.special_price == "na") {
      return (
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link to="/productdetails">
            <Card className="image-box card">
              <img className="center" src={featuredlist.image} alt="" />

              <Card.Body>
                <p className="product-name-on-card">{featuredlist.title}</p>
                <p className="product-price-on-card">
                Price : {featuredlist.price}
              </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    } else {
      return (
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link to="/productdetails">
            <Card className="image-box card">
              <img className="center" src={featuredlist.image} alt="" />

              <Card.Body>
                <p className="product-name-on-card">{featuredlist.title}</p>
                <p className="product-price-on-card">
                  Price :{" "}
                  <strike className="text-secondary">
                    ${featuredlist.price}
                  </strike>{" "}
                  ${featuredlist.special_price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    }
  });
  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Some of our Exclusive Collection, You may like.</p>
        </div>

        <Row>{MyView}</Row>
      </Container>
    </Fragment>
  );
}

export default FeaturedProducts;
