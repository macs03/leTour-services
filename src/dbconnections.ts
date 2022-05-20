const mongo = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

let db: any, users: any;

const dbConnection = () => {
  mongo.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err: any, client: { db: (arg0: string) => any }) => {
      if (err) {
        console.error(err);
        return;
      }
      db = client.db("leTour");
      users = db.collection("users");
    }
  );
};

export default dbConnection;
export { db, users };
