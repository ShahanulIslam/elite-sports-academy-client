import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const MyEnrolledClass = () => {
    const data= useLoaderData();
    console.log(data);
    return (
        <div>
             <Helmet>
                <title>Elite Sports  Academy | MyEnrolled Class</title>
            </Helmet>
        </div>
    );
};

export default MyEnrolledClass;