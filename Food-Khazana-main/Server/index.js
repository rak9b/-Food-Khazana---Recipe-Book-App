require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ko3ml0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const recipesCollection = client.db("recipeDB").collection("recipes");

    // Get Operations

    app.get("/all-recipes", async (req, res) => {
      const result = await recipesCollection.find().toArray();
      res.send(result);
    });

    app.get("/all-recipes/:id", async (req, res) => {
      const id = req.params.id;
      const recipe = await recipesCollection.findOne({ _id: new ObjectId(id) });
      res.send(recipe);
    });

    app.get("/recipe/:id", async (req, res) => {
      const id = req.params.id;
      const recipe = await recipesCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(recipe);
    });

    app.get("/recipe-details/:id", async (req, res) => {
      const id = req.params.id;
      const objectId = new ObjectId(id);
      const recipe = await recipesCollection.findOne({ _id: objectId });
      res.send(recipe);
    });

    app.get("/top-liked-recipes", async (req, res) => {
      const recipes = await recipesCollection
        .find({})
        .sort({ likes: -1 })
        .limit(6)
        .toArray();
      res.send(recipes);
    });

    // Post Operations

    app.post("/my-recipes", async (req, res) => {
      const { email } = req.body;
      const result = await recipesCollection.find({ email }).toArray();
      res.send(result);
    });

    app.post("/add-recipes", async (req, res) => {
      const newRecipe = req.body;
      const result = await recipesCollection.insertOne(newRecipe);
      res.send(result);
    });

    // Put Operations::

    app.put("/update-recipe/:id", async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;
      const result = await recipesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );
      res.send(result);
    });

    //Patch Operations:: 
    
    app.patch("/like-recipe/:id", async(req, res) =>{
      const id = req.params.id;
      const { likes } = req.body;
      const result = await recipesCollection.updateOne(
        {_id: new ObjectId(id)},
        {$set: {likes : likes}}
    );
    res.send(result);
    })

    // Delete Operations::

    app.delete("/del-recipes/:id", async(req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const result = await recipesCollection.deleteOne(query);
      res.send(result);

    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`Food Khazana Server is Running:: `);
});

app.listen(port, () => {
  console.log(`Food Khazana Server is running in port: ${port}`);
});
