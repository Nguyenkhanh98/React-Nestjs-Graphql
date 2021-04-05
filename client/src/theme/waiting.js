import React, { Suspense } from 'react';
import Loading from './loading';

export default (Component) => (props) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);
