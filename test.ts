import "dotenv/config";
import { generateImageUrl } from "@imgproxy/imgproxy-node";

const url = generateImageUrl({
  endpoint: "http://localhost:8080/",
  url: "https://www.pekkis.eu/ai/kaaretorttu.png",
  options: {
    resizing_type: "fit",
    width: 300,
    gravity: { type: "no" },
    enlarge: 1,
    format: "webp",
  },

  salt: process.env.IMGPROXY_SALT,
  key: process.env.IMGPROXY_KEY,
});

console.log("URL", url);
