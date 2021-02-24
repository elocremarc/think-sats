import React from "react";

const LoadingSpinner = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center p-4">
        <div className="spinner-border text-light " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoadingWrapper = (props) => {
  return props.loading ? <LoadingSpinner /> : props.children;
};

export default LoadingWrapper;
