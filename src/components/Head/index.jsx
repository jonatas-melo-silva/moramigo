import { memo } from "react";

import ProtoTypes from "prop-types";
import MyHead from "next/head";

export const Head = ({ title }) => {
  return (
    <MyHead>
      <title>{title}</title>
    </MyHead>
  );
};

Head.protoTypes = {
  title: ProtoTypes.string.isRequired,
};

export default memo(Head);
