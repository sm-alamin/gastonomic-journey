import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const BannerDetails = ({info}) => {
  const {id,
    picture_url,
    name,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
  } = info;
  return (
    <div className="">
      <h2>
        Hello, I’m <br />
        {name}
      </h2>

      <h2>About Me:</h2>
      <p>
        {bio}
      </p>

      <div className="flex gap-5">
        <div>
          <p>Department: Senior Chef.</p>
          <p>Experience: {years_of_experience} Years.</p>
          <p>Likes: {likes}</p>
        </div>
        <div>
          <p>Recipe: {number_of_recipes}</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      <div>
        <h2>Follow Me:</h2>
        <div className="flex gap-3 mt-3 mx-auto">
          <a
            className="border rounded-full p-2 hover:border-indigo-500"
            href=""
          >
            <FaFacebookF />
          </a>
          <a
            className="border rounded-full hover:border-indigo-500 p-2"
            href=""
          >
            <FaInstagram />
          </a>
          <a
            className="border rounded-full hover:border-indigo-500 p-2"
            href=""
          >
            <FaTwitter />
          </a>
          <a
            className="border rounded-full hover:border-indigo-500 p-2"
            href=""
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <img src={picture_url} alt="" />
      </div>
    </div>
  );
};

export default BannerDetails;
