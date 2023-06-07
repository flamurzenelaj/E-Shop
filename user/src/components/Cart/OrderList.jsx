import React, { Fragment, useEffect, useState } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

function OrderList({ user }) {
  const [ProductData, setProductData] = useState([]);

  const [show, setShow] = useState(false);
  const [NotificationData, setNotificationData] = useState([]);
  const [NotificationMsg, setNotificationMsg] = useState("");
  const [NotificationTitle, setNotificationTitle] = useState("");
  const [NotificationDate, setNotificationDate] = useState("");

  const [isLoading, setIsLoading] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  const fetchData = () => {
    axios
      .get(AppURL.OrderListByUser(user.email))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [user.email]);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    let Nmsg = event.target.getAttribute("data-message");
    let Ntitle = event.target.getAttribute("data-title");
    let Ndate = event.target.getAttribute("data-date");
    setNotificationMsg(Nmsg);
    setNotificationTitle(Ntitle);
    setNotificationDate(Ndate);
  }


  const MyList = ProductData;
  const MyView = MyList.map((ProductList, i) => {
    return (
        <div>
      <Col md={6} lg={6} sm={12} xs={12}>
        <h5 className="product-name">{ProductList.product_name}</h5>
        <h6> Quantity = {ProductList.quantity} </h6>
        <p>
          {ProductList.size} | {ProductList.color}
        </p>
        <h6>
          Price = {ProductList.unit_price} x {ProductList.quantity} ={" "}
          {ProductList.total_price}$
        </h6>
        <h6>Status = {ProductList.order_status}</h6>
      </Col>
      <Button onClick={handleShow} className="btn btn-danger">Post Review</Button>
      <hr />
      </div>
    );
  });

  return (
    <Fragment>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Order History</h2>
        </div>
        <Card>
          <Card.Body>
            <Row>{MyView}</Row>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>
            <i className="fa fa-bell"></i> Post Your Review
          </h6>
        </Modal.Header>
        <Modal.Body>
          <h6>Review</h6>
          <p>
            Review
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default OrderList;
