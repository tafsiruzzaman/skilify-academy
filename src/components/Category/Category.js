import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = (props) => {
    const { name, innerText, img, bgColorLite, bgColorDark } = props.category;
    const cardStyle = {
        backgroundColor: `${bgColorLite}`,
        height: '319px'
    };
    const imgStyle = {
        backgroundColor: `${bgColorDark}`
    }
    return (
        <div>
            <Col>
                <Card className="p-3" style={cardStyle}>
                    <Card.Img  style={imgStyle} variant="top w-25 mt-3 ms-3" src={img}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {innerText}
                        </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
        </div>
    );
};

export default Category;