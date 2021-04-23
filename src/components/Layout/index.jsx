import { memo } from "react";

import Head from "../Head";
import Header from "../Header";
import Footer from "../Footer";

export const Layout = ({ children, title }) => {
  console.log("Layout");
  return (
    <>
      <Head title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(Layout);
