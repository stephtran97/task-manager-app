import React from 'react';

import * as Pages from '../pages/index';

const NonAuthLayout = () => {
  return (
    <>
      <h1 className="text-center">NonAuthLayout</h1>
      <Pages.LoginPage />
    </>
  );
};

export default NonAuthLayout;
