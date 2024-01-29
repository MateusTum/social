import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Image,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Card,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { fetchUserData, fetchPostData } from "./Api";
import avatar from "../assets/images/avatar.jpg";
import styles from "../styles/Post.module.scss";

const PostSettings = ({ postId }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-three-dots"
        viewBox="0 0 16 16"
      >
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
      </svg>
      {children}
    </a>
  ));

  return (
    <Dropdown>
      <DropdownToggle as={CustomToggle}></DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Delete Post</DropdownItem>
        <DropdownItem>Edit Post</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const PostAuthor = ({ authorName }) => {
  return (
    <>{authorName ? <span>{authorName}</span> : <p>Loading Author...</p>}</>
  );
};

const PostTitle = ({ postTitle }) => {
  return <>{postTitle ? <h4>{postTitle}</h4> : <h4>Loading Title...</h4>}</>;
};

const PostImageCarousel = ({ postImages }) => {
  return (
    <>
      <Carousel slide={true} className="p-0">
        {postImages.map((imageObj, index) => (
          <Carousel.Item
            key={index}
            className={`${styles.carouselItem} text-center`}
          >
            <img
              src={imageObj.image} // Accessing the image URL from the object
              alt={`Slide ${index + 1}`}
              className={`${styles.carouselImage}`} // Ensuring the image takes the full width
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

const PostContent = ({ content }) => {
  // PostContent implementation
  return (
    <>
      {content ? (
        <p> Post content: {content}</p>
      ) : (
        <p>Loading post content...</p>
      )}
    </>
  );
};

const PostInteractions = ({ postId }) => {
  // PostInteractions implementation
};

const Post = ({ postId }) => {
  const [postData, setPostData] = useState(null);
  const [authorData, setauthorData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPostData(postId);
        setPostData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log("an error occurred while fetching");
      }
    };

    fetchData();
  }, [postId]); // Dependency array to re-fetch when postId changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorData = await fetchUserData(postData.author); // Fetch user data using postData.author
        setauthorData(authorData);
      } catch (error) {
        console.log("An error occurred while fetching user data:", error);
      }
    };

    if (postData && postData.author) {
      // Only fetch user data if postData.author is available
      fetchData();
    }
  }, [postData]); // Dependency array includes postData

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <Container fluid className="p-0">
      <Row className="mx-auto">
        {/* Sidebar for Author's Image */}
        <Col md={2} className="sidebar text-center pt-2">
          {authorData && authorData.profile_image ? (
            <Image
              src={authorData.profile_image}
              roundedCircle
              className={`${styles.authorPicture}`}
            />
          ) : (
            <Image
              src={avatar}
              roundedCircle
              className={`${styles.authorPicture}`}
            />
          )}
        </Col>

        {/* Main Content Area */}
        <Col md={10} className={`${styles.postContainer}`}>
          {/* Post Header */}
          <Row className="post-header py-2">
            <Col md={11}>
              {postData ? (
                <PostTitle postTitle={postData.title} />
              ) : (
                <h4>Loading title data...</h4>
              )}
            </Col>
            <Col
              md={1}
              className="d-flex justify-content-center align-items-center"
            >
              <PostSettings />
            </Col>
            <Col md={12} className="author-info">
              {authorData ? (
                <PostAuthor authorName={authorData.username} />
              ) : (
                <p>Loading author data...</p>
              )}
            </Col>
          </Row>

          {/* Post Images */}
          <Row className="mx-auto">
            <Col md={12} className="p-0 post-images">
              {postData && postData.images && postData.images.length > 0 && (
                <PostImageCarousel postImages={postData.images} />
              )}
            </Col>
          </Row>

          {/* Post Body */}
          <Row className="mx-auto">
            <Col md={12} className="post-body">
              <PostContent content={postData.content} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
