const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: myApiKey
});

const openai = new OpenAIApi(config);

const prompt =
  "Anime key visual of a girl with blue hair and happy, wearing an orange scarf, official media, trending on pixiv";
const numberOfImages = 4;
const imageSize = "1024x1024";

openai
  .createImage({
    prompt: prompt,
    n: numberOfImages,
    size: imageSize,
  })
  .then((data) => {
    // console.log(data.data.data);
  });
