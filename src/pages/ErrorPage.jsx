import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-error">
          Oops! Page not found
        </h2>
        <p className="mt-4 text-base-content">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
