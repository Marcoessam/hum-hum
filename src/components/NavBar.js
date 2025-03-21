import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const NavBar = ({filterbySearch}) => {

    // البحث
    const [searchValue , setSearchValue]= useState('')
    const onSearch=(e)=>{
        // لتوقيف البحث ع اللي ع طول دا
        e.preventDefault()
        filterbySearch(searchValue)
        setSearchValue('')
    }

    return (
    <Row>
            <Navbar bg='dark' variant='dark' expand="lg" className="bg-body-tertiary">
    <Container >
        <Navbar.Brand href="#">
            <div className='brand-color'>مطعم فهد البطل </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="text"
            placeholder="ابحث ينجم النجوم.."
            className="mx-2"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            />
            <button onClick={onSearch} className=' btn-search'>بحث</button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </Row>
    )
}

export default NavBar
