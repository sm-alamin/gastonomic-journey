import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Blog from "./Blog";
import { FaDownload } from "react-icons/fa";
import Banner from "../Banner/Banner";

const Blogs = () => {
  const downloadPDF = () => {
    // create a new jsPDF instance
    const doc = new jsPDF("p", "pt", "a4", true);

    // get the HTML content of the blog post
    const blogPost = document.getElementById("blog-post");

    // add a delay to allow time for the content to fully render
    html2canvas(blogPost, {
      width: window.innerWidth, // Set the width of the canvas to the window's width
      windowWidth: document.documentElement.clientWidth, // Set the window width to the client's width
      windowHeight: document.documentElement.clientHeight, // Set the window height to the client's height
      scrollX: window.scrollX, // Set the scroll X position to the current window scroll position
      scrollY: window.scrollY, // Set the scroll Y position to the current window scroll position
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // add the image to the PDF document
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, width, height);

      // save the PDF document
      doc.save("blog-post.pdf");
    });

    // ensure that all resources are loaded before creating the PDF document
    window.onload = () => {
      doc.autoPrint(); // automatically open the print dialog
    };
  };

  return (
    <div>
       <Banner pageName="Blog"/>
      <div className="text-center">
        {/* Button to download blog */}
        <button className="btn active mt-5" onClick={downloadPDF}>
          <FaDownload />
        </button>
      </div>
      {/* Blog Page */}
      <Blog />
    </div>
  );
};

export default Blogs;
