import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../store/actions";

const Favourites = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {state.favourites.elements.map((f) => (
              <ListGroupItem>
                <StarFill
                  onClick={() => {
                    dispatch(removeFromFav(f));
                  }}
                />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
