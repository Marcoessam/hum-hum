import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { items } from './../data';
import  Zoom  from 'react-reveal/Zoom';





const Cardlist = ({itemsData}) => {
    return (
    <Row>
        <Zoom>
        {
            itemsData.length >= 1? (itemsData.map((items)=>{

                return (<Col key={items.id} sm="12" className='mb-3'>
                    <Card className='d-flex flex-row ' style={{backgroundColor:"white"}}>
                <Card.Img className='' style={{width:"170px"}} variant="top" src={items.imgUrl} />
                <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                    <div className='item-title'>{items.title}</div>
                    <div className='item-price'>{items.price}</div>
                </Card.Title>
                <Card.Text className='py-2'> 
                    <div className='item-description'>
                    {items.description}
                    </div>
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>)
            })) : <h3 className="text-center"> اصناف يوجد لا </h3>
        }
        </Zoom>
    </Row>
    )
}
export default Cardlist
