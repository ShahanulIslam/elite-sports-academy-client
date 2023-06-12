import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyEnrolledClass = () => {
    // const data = useLoaderData();
    const [axiosSecure] = useAxiosSecure()

    const [enrolledClass, setEnrolledClass] = useState([]);
    useEffect(() => {
        axiosSecure("http://localhost:5000/enrolled-class")
            .then(res => {
                const enrolledClassesData = res.data;
                setEnrolledClass(enrolledClassesData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    console.log(enrolledClass);

    return (
        <div>
            <Helmet>
                <title>Elite Sports  Academy | MyEnrolled Class</title>
            </Helmet>
            

        </div>
    );
};

export default MyEnrolledClass;