export const getFileFromURL = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const type = url.split('.').pop();
  const name = url.split('/').pop();
  const meta = { type: `image/${type}` };

  console.log({ data, name, meta });

  return new File([data], name!, meta);
};
