import React from "react";
import { Card, Image } from "react-bootstrap";
import avatar from "../assets/avatar1.png";

function CourseCard({ course }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <div className="d-flex align-items-center mb-2">
          <Image src={avatar} roundedCircle alt={course.instructor.name} width={40} height={40} />
          <div className="ms-2">
            <p className="mb-0 fw-bold">{course.instructor.name}</p>
            <small className="text-muted">{course.instructor.role}</small>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <small>⭐ {course.rating.value} ({course.rating.count})</small>
          <strong>{course.price}</strong>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;