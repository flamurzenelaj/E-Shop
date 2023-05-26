import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [MenuData, setMenuData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {});
  }, []);

  const CatList = MenuData;
  const MyView = CatList.map((CatList, i) => {
    return (
      <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Link to={"/productcategory/" + CatList.category_name}>
        <Card className="h-100 w-100 text-center">
          <Card.Body>
            <img
              className="center"
              src={CatList.category_image}
              alt=""
            />
            <h6 className="category-name">MOBILE</h6>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    );
  });
  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>CATEGORIES</h2>
          <p>Some of our Exclusive Collection, You may like.</p>
        </div>

        <Row>
         {MyView}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Categories;
