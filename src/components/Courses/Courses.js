import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([])
    useEffect( () => {
        fetch('./coursedetails.JSON')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setAllCourses(data);
        })
    }, []);
    const handleSearch = e => {
        let searchTextValue = e.target.value;
        let newCourses;
        if(searchTextValue) {
            newCourses = courses.filter(course => course.courseName.toLowerCase().includes(searchTextValue.toLowerCase()));
            setCourses(newCourses);
        }
        else {
            setCourses(allCourses);
        };
    }
    return (
        <div className="container">
            <InputGroup onChange={handleSearch} className="my-3 w-75 mx-auto">
                <FormControl placeholder="search courses"/>
            </InputGroup>
            <div className="my-4">
                    <Row xs={1} md={2} lg={3} className="gy-4 gx-lg-4">
                        {
                            courses.map(course => <Course key={course.key} course={course}></Course>)
                        }
                    </Row>
                </div>
        </div>
    );
};

export default Courses;