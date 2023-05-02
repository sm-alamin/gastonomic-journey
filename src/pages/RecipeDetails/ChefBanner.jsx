import React, { useEffect, useState } from "react";
import BannerDetails from "./BannerDetails";
import { useParams } from "react-router-dom";

const ChefBanner = () => {
  const { id } = useParams();
  const [bannerInfo, setBannerInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chef-info/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBannerInfo(data);
        } else {
          setBannerInfo([data]);
        }
      });
  }, [id]);

  return (
    <div>
      {bannerInfo.map((info) => (
        <BannerDetails key={info.id} info={info} />
      ))}
    </div>
  );
};

export default ChefBanner;
