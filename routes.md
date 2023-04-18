# Lists

## schema

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    hairColor: {
      type: String,
      required: true,
    },
    clothingAccessory: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    artStyle: {
      type: String,
      required: true,
    },
    websiteStyle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
```

### GET api/lists/all
- getting the collection of List
```jSON
[
    {
        "imageKeys": [],
        "_id": "643d6b03daeedda04b3fc4df",
        "hairColor": "pink",
        "clothingAccessory": "scarf",
        "gender": "female",
        "background": "mountain",
        "artStyle": "anime",
        "websiteStyle": "pixiv",
        "createdAt": "2023-04-17T15:51:31.516Z",
        "updatedAt": "2023-04-17T19:50:02.867Z",
        "__v": 0,
        "imageUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uJc7t50yhOmrUNg4HSXxaTAv/user-vRpqtwhtoJAYykfco7M2L3Bg/img-sTGkNHFvUYBVwXjP3j9L7nOS.png?st=2023-04-17T18%3A50%3A02Z&se=2023-04-17T20%3A50%3A02Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-17T19%3A08%3A44Z&ske=2023-04-18T19%3A08%3A44Z&sks=b&skv=2021-08-06&sig=eLECEp2MSLjh3XBCTMvOO8oxDcVC9vfuDicUHY8PAWQ%3D"
    },
    {
        "imageKeys": [],
        "_id": "643d6b348c6716f57c0e3c05",
        "hairColor": "pink",
        "clothingAccessory": "scarf",
        "gender": "female",
        "background": "mountain",
        "artStyle": "anime",
        "websiteStyle": "pixiv",
        "createdAt": "2023-04-17T15:52:20.118Z",
        "updatedAt": "2023-04-17T20:51:20.333Z",
        "__v": 0,
        "imageUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uJc7t50yhOmrUNg4HSXxaTAv/user-vRpqtwhtoJAYykfco7M2L3Bg/img-mJmX46ni8OywvmVsx3Tmhm6K.png?st=2023-04-17T19%3A51%3A20Z&se=2023-04-17T21%3A51%3A20Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-17T19%3A09%3A40Z&ske=2023-04-18T19%3A09%3A40Z&sks=b&skv=2021-08-06&sig=5WDwV35qmKlIraG7G9UjayL3SBZiqmcVOtC%2BO40BIzo%3D"
    },
    {
        "imageKeys": [],
        "_id": "643d6f414e0afc8acc08d504",
        "hairColor": "pink",
        "clothingAccessory": "scarf",
        "gender": "female",
        "background": "mountain",
        "artStyle": "anime",
        "websiteStyle": "pixiv",
        "createdAt": "2023-04-17T16:09:37.891Z",
        "updatedAt": "2023-04-17T19:41:51.259Z",
        "__v": 0,
        "imageUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uJc7t50yhOmrUNg4HSXxaTAv/user-vRpqtwhtoJAYykfco7M2L3Bg/img-WNsflpzIZDk6s4vK5r29JPkj.png?st=2023-04-17T18%3A41%3A51Z&se=2023-04-17T20%3A41%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-17T19%3A09%3A50Z&ske=2023-04-18T19%3A09%3A50Z&sks=b&skv=2021-08-06&sig=LV9D10q47ldFcKuWfynmN9yXaMfe%2BERPMRTcO6OU4Q4%3D"
    },
    {
        "_id": "643db4a60035cbb79524625e",
        "hairColor": "blue",
        "clothingAccessory": "glasses",
        "gender": "female",
        "background": "mountain",
        "artStyle": "anime",
        "websiteStyle": "pixiv",
        "createdAt": "2023-04-17T21:05:42.789Z",
        "updatedAt": "2023-04-18T01:08:50.115Z",
        "__v": 5,
        "imageUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-uJc7t50yhOmrUNg4HSXxaTAv/user-vRpqtwhtoJAYykfco7M2L3Bg/img-917MaITcrmri0ACP7fxRHORc.png?st=2023-04-17T23%3A27%3A07Z&se=2023-04-18T01%3A27%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-18T00%3A09%3A35Z&ske=2023-04-19T00%3A09%3A35Z&sks=b&skv=2021-08-06&sig=/OWiiLdXIpvNPRkikwikwtvYagp1fKNeSVuHpCrYZqI%3D",
        "imageKey": "1681777628117testimage.png",
        "imageKeys": [
            "1681780121162testimage0.png",
            "1681780121185testimage1.png",
            "1681780121028testimage2.png",
            "1681780121075testimage3.png"
        ]
    }
]
```

### POST api/lists/

- create list info (dropbox selection)
  - request body


```Json
{
   "hairColor":"pink",
   "clothingAccessory":"scarf",
   "gender":"female",
   "background":"mountain",
   "artStyle":"anime",
   "websiteStyle":"pixiv"
}
```

- response

```Json
{
   "hairColor": "pink",
   "clothingAccessory": "scarf",
   "gender": "female",
   "background": "mountain",
   "artStyle": "anime",
   "websiteStyle": "pixiv",
   "imageKeys": [],
   "_id": "643e98d25339b7e54613c8f6",
   "createdAt": "2023-04-18T13:19:14.859Z",
   "updatedAt": "2023-04-18T13:19:14.859Z",
   "__v": 0
}
```

### GET api/image/:id

- :id === list_Id - response

```json

      {
      "list": {
          "_id": "643e9c2e5339b7e54613c8f9",
          "hairColor": "green",
          "clothingAccessory": "hat",
          "gender": "male",
          "background": "office",
          "artStyle": "illustration",
          "websiteStyle": "pixiv",
          "createdAt": "2023-04-18T13:33:34.434Z",
          "updatedAt": "2023-04-18T13:33:34.434Z",
          "__v": 0
      },
      "images": [1:{
  "https://what-ai-want-mern-dev.s3.amazonaws.com/1681825086842testimage0.png?AWSAccessKeyId=AKIATSGO3AIMKIH5NMBB&Expires=1681826287&Signature=UndX3v1hDKbgNyHXQLYTEkSpRuE%3D"
  },
  2:{
  "https://what-ai-want-mern-dev.s3.amazonaws.com/1681825086870testimage1.png?AWSAccessKeyId=AKIATSGO3AIMKIH5NMBB&Expires=1681826287&Signature=vN%2FILhsM3ro3a2Ya1nllpiHDbK0%3D"
  },
  3:{
  "https://what-ai-want-mern-dev.s3.amazonaws.com/1681825086800testimage2.png?AWSAccessKeyId=AKIATSGO3AIMKIH5NMBB&Expires=1681826287&Signature=YaDbpxN0%2FuupEil6NQ%2Fg87a6gYQ%3D",
  },
  4:{
  "https://what-ai-want-mern-dev.s3.amazonaws.com/1681825087074testimage3.png?AWSAccessKeyId=AKIATSGO3AIMKIH5NMBB&Expires=1681826287&Signature=BW3uOQAo5Ecx3htUpGDMm5aI3K0%3D"
  }]
  }
  ```
### GET api/lists/all/:userId

```Json
{

    "list": [{
          "_id": "643e9c2e5339b7e54613c8f9",
          "hairColor": "green",
          "clothingAccessory": "hat",
          "gender": "male",
          "background": "office",
          "artStyle": "illustration",
          "websiteStyle": "pixiv",
          "createdAt": "2023-04-18T13:33:34.434Z",
          "updatedAt": "2023-04-18T13:33:34.434Z",
          "__v": 0
      },{
          "_id": "643e9c2e5339b7e54613c8f9",
          "hairColor": "green",
          "clothingAccessory": "hat",
          "gender": "male",
          "background": "office",
          "artStyle": "illustration",
          "websiteStyle": "pixiv",
          "createdAt": "2023-04-18T13:33:34.434Z",
          "updatedAt": "2023-04-18T13:33:34.434Z",
          "__v": 0
      }]

}
```

### GET api/lists/:id

```Json
{
    "_id": "643e9c2e5339b7e54613c8f9",
    "hairColor": "green",
    "clothingAccessory": "hat",
    "gender": "male",
    "background": "office",
    "artStyle": "illustration",
    "websiteStyle": "pixiv",

    "createdAt": "2023-04-18T13:33:34.434Z",
    "updatedAt": "2023-04-18T13:38:07.801Z",
    "__v": 1
}
```
