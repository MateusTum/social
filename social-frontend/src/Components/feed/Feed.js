import React from "react";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";

// Import styles
import styles from "./feed_styles.module.scss";

// Import Post component
import Post from "../posts/Post";

const FeedOptions = () => {
  return (
    <Col
      className={`d-flex justify-content-center border-bottom pb-2 ${styles.feedHeader}`}
    >
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
  );
};

/**
 * Renders the feed component.
 * @returns {JSX.Element} The rendered feed component.
 */
const Feed = () => {
  return (
    <Container className={`mx-auto ${styles.feed}`}>
      {/* Feed options component */}
        <FeedOptions/>

      {/* Feed content here */}

        <Post/>
        <Post/>
        <Post/>

    </Container>
  );
};

export default Feed;
