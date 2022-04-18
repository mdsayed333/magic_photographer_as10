import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container blog-container'>
            <div className='blog-ques'>
                <h4>
                    <span className='text-danger'>Ques :</span> Difference between authorization and authentication.
                </h4>
                <p>
                    <span className='fw-bolder'>Ans :</span> Authorization হলো ব্যাক্তি বা system কে কোনো একটা site এর অনুমোদন বা ব্যবহার করার অধিকার দেওয়া।
                   <br /> আর, <br /> Authentication হলো কোনো site এর ব্যবহার করার অনুমোদন আছে কিনা সেটা চেক করা।
                </p>        
            </div>
            <div className='blog-ques'>
                <h4>
                    <span className='text-danger'>Ques :</span> Why are you using firebase? What other options do you have to 
                    implement authentication?
                </h4>
                <p>
                    <span className='fw-bolder'>Ans :</span> আমি Firebase ব্যবহার করি কারণ - Firebase Authentication এবং hosting এর মতো অনেক সুবিধা দিয়ে থাকে। 
                    Firebase অন্যান্য server এর তুলনায় নিরাপদ এবং এটি ব্যবহার করা অনেক সহজ।
                </p>
                <p>
                Firebase alternative for implementing Authentication:-
                    <ul>
                        <li>Auth0</li>
                        <li>OKta</li>
                        <li>JSON WebToken</li>
                        <li>Mongo DB</li>
                        <li>Passport Amazon Cognito</li>
                    </ul>
                </p>
            </div>
            <div className='blog-ques'>
                <h4>
                    <span className='text-danger'>Ques :</span> What other services does firebase provide other than authentication?
                </h4>
                <p>
                    <span className='fw-bolder'>Ans :</span> Authentication ছাড়াও Firebase যেসব service দিয়ে থাকে তার মধ্যে গুরুত্বপূর্ণ হলো:-
                    <ol>
                        <li>Firebase Machine Learning</li>
                        <li>Firebase  Realtime Database</li>
                        <li>Firebase Push Notification</li>
                        <li>Firebase  Cloud Storage</li>
                        <li>Firebase Analytics</li>
                        <li>Firebase Crash Report</li>
                    </ol>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;