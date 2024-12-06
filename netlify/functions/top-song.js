const axios = require("axios");

// fetch top song from spotify api
exports.handler = async function (event, context) {
  const accessToken = event.queryStringParameters.access_token;

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        time_range: "long_term", // overall top song
        limit: 1,
      },
    });

    const tmp = response.data.items[0];
    const song = {
        name: tmp.name,
        artists: tmp.artists,
        cover: tmp.album.images[0].url,
        spotifyUrl: tmp.uri
    };
    return {
      statusCode: 200,
      body: JSON.stringify(song),
    };
  } catch (error) {
    console.error("Error fetching top song:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching top song" }),
    };
  }
};
