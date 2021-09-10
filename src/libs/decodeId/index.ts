import utf8 from 'utf8';
import base64 from 'base-64';

const decodeId = (id: string) => {
  const decoded = base64.decode(id);
  const text = utf8.decode(decoded);
  return text;
}

export default decodeId;
