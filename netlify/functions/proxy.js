const fetch = require("node-fetch");

exports.handler = async function (event) {
  try {
    const targetPath = event.path.replace("/.netlify/functions/proxy", "");
    const targetUrl = "https://api.le-systeme-solaire.net" + targetPath;

    const res = await fetch(
      targetUrl + (event.rawQuery ? "?" + event.rawQuery : ""),
      {
        headers: {
          Authorization:
            "Bearer 21394e5e-64c2-4dd5-b312-a195cf6f12b6",
        },
      }
    );

    const body = await res.text();

    return {
      statusCode: res.status,
      body,
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
