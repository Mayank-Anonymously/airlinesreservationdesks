import Seo from "@/component/common/Seo";
import Screen from "@/component/common/Screen";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";


const SearchEngine = () => {
    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <>

            <Form noValidate validated={validated} onSubmit={() => console.log("submit")} className="text-white">
                <Row className="mb-3">

                    <Form.Group as={Col} md="6" >
                        <Form.Label>Departing From</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <LiaMapMarkerAltSolid color="black" size={20} /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Departing From"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Arriving To</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <LiaMapMarkerAltSolid color="black" size={20} /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Arriving To"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mt-4" as={Col} md="6" >
                        <Form.Label>Travelling Date From</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <LiaMapMarkerAltSolid color="black" size={20} /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Travelling Date From"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                          <Form.Group className="mt-4" as={Col} md="6" >
                        <Form.Label>Travelling Date To</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <LiaMapMarkerAltSolid color="black" size={20} /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Travelling Date to"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                     <Form.Group className="mt-4" as={Col} md="6" >
                        <Form.Label>Travellers</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <LiaMapMarkerAltSolid color="black" size={20} /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Number of travelers"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                     <Form.Group className="mt-4 submit-btn" as={Col} md="6" >
                         <Button type="submit" >Submit form</Button>
                    </Form.Group>
              



                </Row>
               
               
            </Form>


        </>


    );
}


export default SearchEngine;