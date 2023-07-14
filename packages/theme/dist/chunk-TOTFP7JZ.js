// lib/util/addPrefix.ts
function addPrefix(object) {
  const objectEntries = Object.entries(object).map(([key, value]) => {
    let newKey = key;
    if (!key.includes("hiperion-")) {
      const [oldKey] = key.split(".");
      newKey = `.hiperion-${oldKey}`;
    }
    return { [newKey]: value };
  });
  return objectEntries.reduce((acc, value) => {
    return { ...acc, ...value };
  }, {});
}

export {
  addPrefix
};
