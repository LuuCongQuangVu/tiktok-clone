import Header from '~/layouts/components/Header';

import React from 'react';

function HeaderOnly({ children }) {
  console.log(children);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
