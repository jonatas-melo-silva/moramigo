// import utf8 from 'utf8';
import base64 from 'base-64';

const encodeId = (id: number) => {
  // const text = utf8.encode(id);
  const encoded = base64.encode(id);
  return encoded;
}

export default encodeId;