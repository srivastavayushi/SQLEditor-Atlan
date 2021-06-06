import React, { PureComponent, Suspense } from "react";
import Loading from "./Loading";

const LazyLoader = (WrappedComponent) => {
  return class Wrapped extends PureComponent {
    render() {
      return (
        <Suspense fallback={<Loading />}>
          <WrappedComponent {...this.props} />
        </Suspense>
      );
    }
  };
};

export default LazyLoader;
