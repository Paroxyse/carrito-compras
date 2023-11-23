import { MongoClient } from 'mongodb';

const uri = process.env.mongodburl;
const options = {};

let client;
let clientPromise;

if (process.env.environment === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const connectedClient = await clientPromise;
  const db = connectedClient.db(process.env.mongodbname);
  return db;
}

export default connectToDatabase;