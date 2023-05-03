import React, { useEffect, useState } from "react";
import BannerDetails from "./BannerDetails";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const ChefBanner = () => {
  const { id } = useParams();
  const [bannerInfo, setBannerInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/chef-info/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBannerInfo(data);
        } else {
          setBannerInfo([data]);
        }
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <ClipLoader   color="#36d7b7" />
        </div>
      ) : (
        bannerInfo.map((info) => <BannerDetails key={info.id} info={info} />)
      )}
    </div>
  );
};

export default ChefBanner;
