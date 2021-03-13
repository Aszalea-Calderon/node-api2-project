const express = require("express");
const postRouter = express.Router();

const post = require("./posts-model.js");

postRouter.get("/", (req, res) => {
  post
    .find(req.body)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "The post with the specified ID does not exist" });
    });
});

postRouter.get("/:id", (req, res) => {
  post
    .findById(req.params.id)
    .then((thePost) => {
      if (thePost) {
        res.status(200).json(thePost);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "The post information could not be retrieved" });
    });
});

module.exports = postRouter;

// implement your posts router here

//[GET] R of CRUD - Read Records / Returns all the array of the post objects contained in the database--/api/posts -- If there is an error in retreving from database respond with 500 --{ message: "The posts information could not be retrieved" }`

//[GET] R of CRUD - Read Records / returns the post object with the specified id -- /api/posts/:id

//[POST] C of CRUD - Create / Cretes a post using the info sent inside the request boday and returns the newly created post object -/api/posts

//[PUT] U of CRUD - Update records with the specified id using the data from the request body and returns the modified document-/api/posts/:id

//[DELETE]-- D of CRUD - Removes thr post with the specified id and returns the deleded post /api/posts/:id

//[GET]-- R of CRUD -- Read records/ Returns an array of all the comment objects associated witht he post with the specified id.
