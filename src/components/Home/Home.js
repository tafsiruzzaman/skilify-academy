import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';
import './Home.css'

const Home = () => {
    const [categoties, setCategoties] = useState([]);
    useEffect( () => {
        fetch('./categories.JSON')
        .then(res => res.json())
        .then(data => setCategoties(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center m-lg-5">
                <h1 className="mb-4">Welcome to <span className="spcial-text">skilify accademy</span></h1>
                <h5 className="text-secondary">Skilify accademy, one of the leading skill training institutes in the world offers the best training opportunities.</h5>
                <h5 className="text-secondary">Enriched with quality training this institute, It has been playing a vital role to eradicate the unemployment problem since 2008.</h5>
                <h5 className="text-secondary">We are offering 30 courses for you conducted by experienced trainers to advance your skills.</h5>
            </div>
            <div>
                <div className="row text-center mt-5">
                    <div className="col-lg-8">
                        <h1>Our favourite course from top category</h1>
                    </div>
                    <div className="col-lg-4">
                        <Button type="button" className="btn btn-danger">See all categories</Button>
                    </div>
                </div>
                <div className="my-5">
                    <Row xs={1} md={2} lg={3} className="gy-4 gx-lg-4">
                        {
                            categoties.map(category => <Category key={category.key} category={category}></Category>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;