import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const BannerDetails = ({info,id}) => {
  const {
    picture_url,
    name,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
  } = info;
  if (id && id !== info.id) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 py-10 justify-center items-center">
      <div>
      <h2 className="text-2xl text-center text-primary font-bold">
        Hello, I’m <br />
        <span className="text-primary text-3xl font-bold">{name}</span>
      </h2>

      <h2 className="text-2xl text-primary font-bold">About Me:</h2>
      <p>
        {bio}
      </p>

      <div className="flex gap-5">
        <div>
          <p><span className="text-primary font-bold">Department:</span> Senior Chef.</p>
          <p><span className="text-primary font-bold">Experience:</span>{years_of_experience} Years.</p>
          
        </div>
        <div>
          <p><span className="text-primary font-bold">Recipes:</span> {number_of_recipes}</p>
          <p><span className="text-primary font-bold">Likes:</span>{likes}</p>
        </div>
      </div>
      <div>
        <h2 className="text-primary font-bold">Follow Me:</h2>
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
      </div>
      <div>
      <LazyLoad height={762}>
      <img src={picture_url} alt="" className="rounded-xl shadow-lg"/>
    </LazyLoad>
      </div>
    </div>
  );
};

export default BannerDetails;
