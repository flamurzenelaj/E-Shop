import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import ReactDOM  from "react-dom";
import Product1 from "../../assets/images/product/product1.png";
import Product2 from "../../assets/images/product/product2.png";
import Product3 from "../../assets/images/product/product3.png";
import Product4 from "../../assets/images/product/product4.png";
import { Link } from "react-router-dom";

function ProductDetails({ data }) {
  let title = data["productList"][0]["title"];
  let brand = data["productList"][0]["brand"];
  let category = data["productList"][0]["category"];
  let subcategory = data["productList"][0]["subcategory"];
  let image = data["productList"][0]["image"];
  let price = data["productList"][0]["price"];
  let product_code = data["productList"][0]["product_code"];
  let remark = data["productList"][0]["remark"];
  let special_price = data["productList"][0]["special_price"];
  let star = data["productList"][0]["star"];

  let image_one = data["productDetails"][0]["image_one"];
  let image_two = data["productDetails"][0]["image_two"];
  let image_three = data["productDetails"][0]["image_three"];
  let image_four = data["productDetails"][0]["image_four"];
  let color = data["productDetails"][0]["color"];
  let size = data["productDetails"][0]["size"];
  let product_id = data["productDetails"][0]["product_id"];
  let short_description = data["productDetails"][0]["short_description"];
  let long_description = data["productDetails"][0]["long_description"];


  const imgOnClick = (event) =>{
    let imgSrc = event.target.getAttribute('src');
    let previewImg = document.getElementById('previewImg');
    ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc);
  }

  function PriceOption(price, special_price){
    if(special_price=="na"){
      return(
        <p className="product-price-on-card">Price : {price}$</p>
      )
    }else{
      return(
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">{price}$</strike> {special_price}$
        </p>
      )
    }
  }

  var ColorDiv = "d-none";
  if(color!="na"){
    let ColorArray = color.split(',');
    var ColorOption = ColorArray.map((ColorList, i)=>{
      return <option value={ColorList}>{ColorList}</option>
    })
    ColorDiv=""
  }
  else{
    ColorDiv="d-none"
  }

  var SizeDiv = "d-none";
  if(size!="na"){
    let SizeArray = size.split(',');
    var SizeOption = SizeArray.map((SizeList, i)=>{
      return <option value={SizeList}>{SizeList}</option>
    })
    SizeDiv=""
  }
  else{
    SizeDiv="d-none"
  }

  return (

    <Fragment>
      <Container fluid={true} className="BetweenTwoSection">
      <div className="breadbody">
    <Breadcrumb>
    <Breadcrumb.Item> <Link to="/" >Home</Link> </Breadcrumb.Item>
      <Breadcrumb.Item >
          <Link to={"/productcategory/" + category}> {category} </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
          <Link to={"/productsubcategory/" + category+ "/" + subcategory}> {subcategory} </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
          <Link to={"/productdetails/" + product_code }> {title} </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    </div>
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white pb-3 mt-4"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row>
              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                <img id="previewImg" className="bigimage" src={image_one} />
                <Container className="my-3">
                  <Row>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        className="w-100 smallimage product-sm-img"
                        onClick={imgOnClick}
                        src={image_one}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        className="w-100 smallimage product-sm-img"
                        onClick={imgOnClick}
                        src={image_two}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        className="w-100 smallimage product-sm-img"
                        onClick={imgOnClick}
                        src={image_three}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        className="w-100 smallimage product-sm-img"
                        onClick={imgOnClick}
                        src={image_four}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                <h5 className="Product-Name">{title}</h5>
                <h6 className="section-sub-title">{short_description}</h6>
                {PriceOption(price,special_price)}
                <h6 className="mt-2">
                  Category: <b>{category}</b>
                </h6>
                <h6 className="mt-2">
                  SubCategory: <b>{subcategory}</b>
                </h6>
                <h6 className="mt-2">
                  Brand: <b>{brand}</b>
                </h6>
                <h6 className="mt-2">
                  Product Code: <b>{product_code}</b>
                </h6>

                <div className={ColorDiv}>
                  <h6 className="mt-2">Choose Color</h6>
                  <select className="form-control form-select">
                    <option>Choose Color</option>
                    {ColorOption}
                  </select>
                </div>

                <div className={SizeDiv}>
                  <h6 className="mt-2">Choose Size</h6>
                  <select className="form-control form-select">
                    <option>Choose Size</option>
                    {SizeOption}
                  </select>
                </div>

                <div className="">
                  <h6 className="mt-2">Choose Quantity</h6>
                  <select className="form-control form-select">
                    <option>Choose Quantity</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                  </select>
                </div>


                <div className="input-group mt-3">
                  <button className="btn site-btn m-1 ">
                    {" "}
                    <i className="fa fa-shopping-cart"></i> Add To Cart
                  </button>
                  <button className="btn btn-primary m-1">
                    {" "}
                    <i className="fa fa-car"></i> Order Now
                  </button>
                  <button className="btn btn-primary m-1">
                    {" "}
                    <i className="fa fa-heart"></i> Favourite
                  </button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="" md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">DETAILS</h6>
                <p>{long_description}</p>
              </Col>

              <Col className="" md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">REVIEWS</h6>
                <p className=" p-0 m-0">
                  <span className="Review-Title">Kazi Ariyan</span>{" "}
                  <span className="text-success">
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>

                <p className=" p-0 m-0">
                  <span className="Review-Title">Kazi Ariyan</span>{" "}
                  <span className="text-success">
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>

                <p className=" p-0 m-0">
                  <span className="Review-Title">Kazi Ariyan</span>{" "}
                  <span className="text-success">
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProductDetails;
