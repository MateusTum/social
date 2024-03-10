import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";

// Import styles
import styles from "./post_styles.module.scss";

// Import profile picture
const profilePicture = require("../../assets/images/profile.jpg");

const Post = () => {
  // Generate some random data for the post
  const postTitle = "Lorem Ipsum";
  const authorName = "John Doe";
  const postDate = "June 1, 2022";
  const postImage = "https://example.com/post-image.jpg";
  const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <Container fluid className={`${styles.post} p-0`}>

      <Row className={`${styles.postHeader} w-100 mx-auto`}>

        <Col xs={1} className={`${styles.contentWrapper} d-flex`}>
          <div className={styles.box}></div>
        </Col>

        <Col xs={10} className={`${styles.contentWrapper} d-flex`}>
          <div className={styles.box}></div>
        </Col>

        <Col xs={1} className={`${styles.contentWrapper} d-flex`}>
          <div className={styles.box}></div>
        </Col>

      </Row>

      <Row className={`${styles.postBody} w-100 mx-auto`}>

      {postImage && (
        <>
          <Col xs={12} className={`${styles.bodyImage} d-flex`}>
            <div className={styles.box}></div>
          </Col>
          </>
        )}

          <Col xs={12} className={`${styles.bodyText} d-flex`}>
            <div className={styles.box}></div>
          </Col>
        
      </Row>

      <Row className={`${styles.postInteractions} w-100 mx-auto`}>

        <Col xs={4} className={`${styles.postLikes} d-flex`}>
          <div className={styles.box}></div>
        </Col>

        <Col xs={4} className={`${styles.postComments} d-flex`}>
          <div className={styles.box}></div>
        </Col>

        <Col xs={4} className={`${styles.postShares} d-flex`}>
          <div className={styles.box}></div>
        </Col>

      </Row>

    </Container>
  );
};

export default Post;
