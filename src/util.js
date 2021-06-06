const encodeHash = btoa;
const decodeHash = atob;

const serialize = (customObject) => encodeHash(JSON.stringify(customObject));
const deSerialize = (hash) => JSON.parse(decodeHash(hash));

export { serialize, deSerialize };
