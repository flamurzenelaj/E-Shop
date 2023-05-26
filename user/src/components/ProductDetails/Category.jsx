import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
function Category({ProductData, Category}) {


    const MyView = ProductData.map((ProductList, i) => {
      if (ProductList.special_price == "na") {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75" src={ProductList.image} alt="" />
  
              <Card.Body>
                <p className="product-name-on-card">{ProductList.title}</p>
                <p className="product-price-on-card">
                  Price : {ProductList.price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75" src={ProductList.image} alt="" />
  
              <Card.Body>
                <p className="product-name-on-card">{ProductList.title}</p>
                <p className="product-price-on-card">
                    Price : <strike className="text-secondary">${ProductList.price}</strike> ${ProductList.special_price} 
                  </p>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
  
  return (
    <Fragment>
    <Container className="text-center" >
      <div className="section-title text-center mb-55">
        <h2>{Category}</h2>
      </div>
      <Row>{MyView}</Row>
    </Container>
  </Fragment>
  )
}

export default Category