import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="text-center m-lg-5">
                <h1 className="mb-4">Welcome to <span className="spcial-text">skilify accademy</span></h1>
                <h5 className="text-secondary">Skilify accademy, one of the leading skill training institutes in the world offers the best training opportunities.</h5>
                <h5 className="text-secondary">Enriched with quality training this institute, It has been playing a vital role to eradicate the unemployment problem since 2008.</h5>
                <h5 className="text-secondary">We are offering 30 courses for you conducted by experienced trainers to advance your skills.</h5>
            </div>
            <div className="mt-5">
                <div className="row text-center">
                    <div className="col-lg-8">
                        <h1>Our favourite course from top category</h1>
                    </div>
                    <div className="col-lg-4">
                        <Button type="button" class="btn btn-danger">See all categories</Button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;