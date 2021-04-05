import ProtoTypes from "prop-types";
import MyHead from "next/head";

const Head = ({ title }) => {
  return (
    <MyHead>
      <title>{title}</title>
    </MyHead>
  );
};

Head.protoTypes = {
  title: ProtoTypes.string.isRequired,
};

export default Head;
