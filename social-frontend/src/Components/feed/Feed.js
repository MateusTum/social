import React from "react";
import { Dropdown, Button, Row, Col } from "react-bootstrap";

// Import styles
import styles from "./feed_styles.module.scss";

/**
 * Renders the feed component.
 * @returns {JSX.Element} The rendered feed component.
 */
const Feed = () => {
  return (
    <Row className={`mx-auto ${styles.feed}`}>
      <Col className={`d-flex justify-content-center border-bottom pb-2 ${styles.feedHeader}`}>
        <Button variant="dark">New Post</Button>

        <Dropdown className="ms-auto">
          <Dropdown.Toggle variant="dark" id="feed-dropdown">
            Sort by
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Recent</Dropdown.Item>
            <Dropdown.Item>Recommended</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Feed;
