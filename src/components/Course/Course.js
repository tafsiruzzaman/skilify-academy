import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { courseName, img, rating, subscriber, videos, price } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top px-3 pt-3" src={img} />
                    <Card.Body>
                        <div className="d-flex justify-content-between mt-0">
                            <p><i className="far fa-star text-warning"></i> {rating}</p>
                            <p><i className="far fa-eye text-danger"></i> {subscriber}</p>
                            <p><i className="far fa-play-circle text-success"></i> {videos}</p>
                        </div> <hr className="mt-0" />
                        <Card.Title>{courseName}</Card.Title>
                        <div className="d-flex justify-content-between mt-4">
                            <h3>$ {price}</h3>
                            <Button type="button" className="btn btn-danger">Read More</Button>
                        </div>
                    </Card.Body>
                </Card>
             </Col>
        </div>
    );
};

export default Course;