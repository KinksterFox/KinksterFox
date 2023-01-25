const TAG_API = {
  url: (username) => `https://github.kinksterfox.com/api/custom-tags/${username}-tags.json`,
  tag: "tag",
};



async function getCustomTag(username) {
  const res = await fetch(`${TAG_API.url}`).then((response) => {
    return response.json();
  });

  TAG_API.tag = res.find(({ channelname }) => channelname === username).custom_tag;
  return TAG_API.tag
}