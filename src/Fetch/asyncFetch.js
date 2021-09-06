const getData = async (url, options) => {
  const data = await fetch(url, options);
  return data;
};

export default getData;
