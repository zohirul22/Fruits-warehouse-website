import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className="">
                {/* 1st qu solution success */}
                <div className="text-danger my-5"> <h1>QW.No. 01</h1>
                    <h2 className='text-primary'>Difference between javascript and nodejs</h2>
                </div>
                <div className="">
                    <h1 className='text-success'>Ans.to the qu.no-01</h1>
                    <p><span className='text-danger fs-2 '>01.</span>Javascript can only be run in the browsers. And We can run Javascript outside the browser with the help of NodeJS. </p>
                    <p><span className='text-danger fs-2 '>02.</span>It is basically used on the client-side. and It is mostly used on the server-side. </p>
                    <p><span className='text-danger fs-2 '>03.</span>Javascript is capable enough to add HTML and play with the DOM. and Nodejs does not have capability to add HTML tags. </p>
                    <p><span className='text-danger fs-2 '>04.</span>	Javascript is used in frontend development. and Nodejs is used in server-side development. </p>
                    <p><span className='text-danger fs-2 '>05.</span>It is the upgraded version of ECMA script and It is the upgraded version of ECMA script </p>
                </div>
            </div>
            <hr />

            <hr />
            {/* 3nd qu solution success */}
            <div className="">
                <div className="text-danger my-5"> <h1>QW.No. 03</h1>
                    <h2 className='text-primary'>Differences between sql and nosql databases.</h2>
                </div>
                <div className="">
                    <h1 className='text-success'>Ans.to the qu.no-03</h1>
                    <p><span className='text-danger fs-2 '>01.</span>Sql databases have fixed or static or predefined schema and nosql have dynamic schema </p>
                    <p><span className='text-danger fs-2 '>02.</span> Sql databases are not suited for hierarchical data storage and nosql databases are best suited for hierarchical data storage. </p>
                    <p><span className='text-danger fs-2 '>03.</span> Sql  Follows ACID property and nosql Follows CAP </p>
                    <p><span className='text-danger fs-2 '>04.</span> Sql Vertically Scalable and nosql	Horizontally scalable </p>
                    <p><span className='text-danger fs-2 '>05.</span>Sql databases are best suited for complex queries  complex queries and	nosql databases are not so good for complex queries </p>
                </div>

            </div>
            <hr />
            <hr />
            {/* 4th qw slution */}
            <div className="">
                <div className="text-danger my-5"> <h1>QW.No. 04</h1>
                    <h2 className='text-primary'> What is the purpose of jwt and how does it work</h2>
                </div>
                <div className="">
                    <h1 className='text-success'>Ans.to the qu.no-04</h1>
                    <p><span className='text-danger fs-2 '>01.</span>JSON Web Token is a standard used to create access tokens for an application. </p>
                    <p><span className='text-danger fs-2 '>02.</span>JWT is an open standard used to share security information between two parties — a client and a server. </p>
                    <p><span className='text-danger fs-2 '>03.</span>JWT can be used as an access token to prevent unwanted access to a protected resource. </p>
                    <p><span className='text-danger fs-2 '>04.</span>A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data </p>
                    <p><span className='text-danger fs-2 '>05.</span>JSON Web Token (JWT) defines a container to transport data between interested parties </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;