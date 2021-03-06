import React, { useState } from 'react';
import './GeneralServiceList.css'
import {Container, Row} from 'react-bootstrap';
import GeneralServiceListDetails from './GeneralServiceListDetails';
const GeneralServiceList = () => {

  const [allService,]= useState([])

    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            
            <div className='d-flex justify-content-between'>
                <h4 className='mt-4 ml-5'>Service List</h4>
                <h2 className='mt-4 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>User</h2>
            </div>
        <Container style={{background:'#f1f6ff', borderRadius:'8px'}} className='mt-5 pb-5'>
            <Row xs={12} className='align-items-center' style={{marginTop:'10px'}}>
                {/* {
                        allService.length<1 && 
                        // <img src={loader} style={{width:'300px', margin:'auto'}}></img>
                    } */}
                {
                    allService.map(service=>{
                        return <GeneralServiceListDetails key={service._id} service={service}></GeneralServiceListDetails>
                    })
                }
            </Row>
        </Container>

    </div>
    );
};

export default GeneralServiceList;