import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';

export async function GET() {
  try {
    const database = await connectToDatabase();
    const collection = database.collection(process.env.mongocollection);
    const documents = await collection.find({}).toArray();
    return NextResponse.json(documents);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}