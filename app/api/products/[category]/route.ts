import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';

export async function GET(request: NextRequest, context:{params}) {
  const category  = context.params.category;
  try {
    const database = await connectToDatabase();
    const collection = database.collection(process.env.mongocollection);
    const documents = await collection.find({category}).toArray();
    return NextResponse.json(documents);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
