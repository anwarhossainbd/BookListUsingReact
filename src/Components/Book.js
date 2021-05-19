import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";


const Book = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Book">
            <h3 >Book :{props.BookName }</h3>
            <h4>Writter :{props.writter }</h4>



            <Button className="button" onClick={props.delete} variant="primary">Delete</Button>

            <Button variant="primary" onClick={handleShow}>
                edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" onChange={props.inputName} className="form-control"  value={props.BookName} /> &nbsp;

                    <input type="text" onChange={props.inputName2} className="form-control"  value={props.writter} /> &nbsp;

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>




    );

};


export default Book;