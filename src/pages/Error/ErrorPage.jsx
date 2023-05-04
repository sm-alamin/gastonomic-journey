import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div>
        <img
          src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1918.jpg?w=740&t=st=1683050753~exp=1683051353~hmac=f839dcd5cc97470819abaa3038723769c9a451fe5722406538d9790c5864b83d"
          alt=""
          className="animate-bounce"
        />
      </div>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-primary">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8 text-red-700">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-purple-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
