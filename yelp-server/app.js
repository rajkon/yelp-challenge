// import { readFile } from 'fs/promises';
// const searchResp = JSON.parse(
//   await readFile(
//     new URL('./test/data/searchResp.json', import.meta.url)
//   )
// );
// const review = JSON.parse(
//     await readFile(
//       new URL('./test/data/review.json', import.meta.url)
//     )
//   );
import review from "./test/data/review.js";
import searchResp from "./test/data/searchResp.js";

//api setup
import express from "express";
import cors from "cors";
import yelp from "yelp-fusion";
import axios from "axios";

const app = express();
const port = 3001;
const apiKey =
  "iVI_q6nrh4RAj6_Xbe9hFBvgmcQvMOYZKUeIqaxwViPa9SqgmLoqkcRW1KXP7IVdHP0O2Q0vyqOKhqfJaepPVYh-SBUuwZSTZYeXF_nMj_8csi_9LOqhZNVq291EY3Yx";
const client = yelp.client(apiKey);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(cors());
/* app.get('/api', (req, res) => {
    client.search({
        location: 'Alpharetta',
        // offset: '0',
        // limit: '50'
    }).then(response => {
        console.log(JSON.stringify(response.jsonBody));
        res.send(response.jsonBody.businesses);
    }).catch(e => {
        console.log(e);
    });
})  */

app.get("/api", (req, res) => {
  // businessname
  // businessaddress(street,city)
  //for test only
  // console.log("searchResp",JSON.stringify(searchResp));
  //   console.log("body", req.body);

  client
    .search({
      term: "ice cream",
      location: "Alpharetta",
      // offset: '0',
      // limit: '50'
    })
    .then((response) => {
      //   console.log(JSON.stringify(response.jsonBody));
      const businesses5 = response.jsonBody.businesses.slice(0, 5);
      //This below is for test. Need mocking tests
      // const businesses5 = searchResp.businesses.slice(0,5);
      // console.log("len:", businesses5.length);

      const biz5Updated = [];

      businesses5.forEach((b) => {
        const modifiedB = {};
        modifiedB.street = `${
          b.location.address1 + b.location.address2 + b.location.address3
        }`;
        modifiedB.city = b.location.city;
        modifiedB.id = b.id;
        modifiedB.name = b.name;
        biz5Updated.push(modifiedB);
      });

      //   console.log('biz5Updated:',biz5Updated);
      res.send(biz5Updated);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.get("/review", (req, res) => {
  //  excerpt from a review of that business
  //  name of the person that wrote thereview
  //  business information should be output in the order received from the APIresponse
  const id = "E8RJkjfdcwgtyoPMjQ_Olg";

  client
    .reviews("jenis-splendid-ice-creams-alpharetta-2")
    .then((response) => {
      // axios.get( `https://api.yelp.com/v3/businesses/${id}/reviews`,{
      //     headers: {
      //         Authorization: `Bearer ${apiKey}`
      //     },
      //     params: {
      //         id: "E8RJkjfdcwgtyoPMjQ_Olg",
      //     }})
      // .then((response) => {
      //   console.log(JSON.stringify(response.jsonBody));
      //   const review1 = response.jsonBody.review.slice(0, 5);
      //   console.log(review1)

      /*     //This below if for test. Need for temp testing or else mock api for test.
    // const review1 = review.reviews[0];
    // const specificPartsOfReviews = [];
    // const partOfReview = {};
    // partOfReview.text = review1.text;
    // partOfReview.user = review1.user.name;
    // specificPartsOfReviews.push(partOfReview);
    // console.log("review1", specificPartsOfReviews);
    // res.send(specificPartsOfReviews); */
      console.log(
        "response.jsonBody.reviews[0].text: ",
        response.jsonBody.reviews[0].text
      );
      res.send(response.jsonBody.reviews[0].text);
    })
    .catch((e) => {
      console.log(e);
    });
});
