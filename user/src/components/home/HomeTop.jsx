import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'
import axios from 'axios';
import AppURL from '../../api/AppURL';

function HomeTop() {
    const [MenuData, setMenuData] = useState([]);

    useEffect(()=>{
        axios.get(AppURL.AllCategoryDetails).then(response=>{
            setMenuData(response.data);
        }).catch(error=>{

        })
    },[])
  return (
    <Fragment>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={MenuData} />
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <HomeSlider />
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default HomeTop