function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

const compareStrings = (s1: string = '', s2: string = '') => {
  let bigrams = {};

  for (let i = 0; i < s1.length; i++) {
    bigrams[s1.substring()];
  }
};
