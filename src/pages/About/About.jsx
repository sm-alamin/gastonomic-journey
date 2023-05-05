import React from 'react';
import Banner from '../Banner/Banner';

const About = () => {
  return (
    <>
    {/* Banner */}
    <Banner pageName="About Us"/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-8 relative">
          <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="About Us" className="w-full rounded-lg" />


          <div className="w-full h-full lg:h-48 lg:w-80  bg-white p-10 lg:absolute lg:bottom-14 lg:left-2 rounded-lg">
                <p>
                 <span className='text-primary'>We are very happy</span> to share different kinds of recipe. We believe that you guys are very fond of making different kinds of food. 
                </p>
                <div
                  className="text-white text-center p-3 font-bold bg-red-700 absolute -top-3 right-24 lg:-top-5 
                        "
                >
                  Savor the Flavor
                </div>
              </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed mb-4">
            We are a team of passionate foodies who love to create and share recipes with others. Our goal is to help people discover new and exciting dishes that they can make at home. Whether you're a beginner or an experienced chef, we have recipes for everyone.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our recipes are created with love and care, using only the freshest and highest-quality ingredients. We believe that food should be enjoyed and shared with others, and we hope that our recipes will inspire you to create your own delicious meals.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Thank you for visiting our website. We hope you enjoy our recipes and that they bring joy and happiness to your home.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
