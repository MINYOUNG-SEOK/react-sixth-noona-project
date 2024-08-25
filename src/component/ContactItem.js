import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: { name: item.name, phoneNumber: item.phoneNumber },
    });
  };
  return (
    <Row className="align-items-center mb-2">
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        />
      </Col>
      <Col lg={8}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
      <Col lg={3}>
        <Button variant="danger" onClick={handleDelete}>
          삭제
        </Button>
      </Col>
    </Row>
  );
};

export default ContactItem;
