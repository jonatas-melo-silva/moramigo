import React, { memo } from 'react';

import { Head } from '../../elements';
import Header from '../../Header';
import { Footer } from '../../modules';

const Main = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(Main);
