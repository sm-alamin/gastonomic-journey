import React, { useEffect, useState } from "react";
import BannerDetails from "./BannerDetails";

const ChefBanner = () => {
  useEffect(() => {
    const [bannerInfo, setBannerInfo] = useState([]);
    fetch('http://localhost:5000/chef-info')
      .then(response => response.json())
      .then(data => setBannerInfo(data));
  }, []);
  return (
    <div>
      {
        bannerInfo.map(info => <BannerDetails 
        key={info.id}
        info ={info}
        />)
      }
    </div>
  );
};

export default ChefBanner;
