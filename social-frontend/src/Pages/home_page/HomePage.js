import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import Feed
import Feed from "../../Components/feed/Feed";

const HomePage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-between">

        {/* Feed */}
        <Col className="justify-content-center ms-auto me-auto" sm={12} md={12} lg={6}>
          <Feed />
        </Col>

      </Row>
    </Container>
  );
};

export default HomePage;
