import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

const SPACE_X_URL = "https://api.spacexdata.com/v3/launches/latest";

const res = await fetch(SPACE_X_URL);
const response_json = await res.json();

const images_list = response_json["links"]["flickr_images"];

const server = serve({ port: 8000 });

console.log("http://localhost:8000/");
for await (const req of server) {
  let img_url = images_list || images_list[Math.floor(Math.random() * images_list.length)];
  let response = `<h1>Hey, Here is one random Space X Image </h1> <img style='height:500;width:500' src="${img_url}"/>`;
  req.respond({ body: response });
}
