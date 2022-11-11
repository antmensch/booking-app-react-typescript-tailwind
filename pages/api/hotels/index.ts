import clientPromise from "../../../src/utils/mongodb/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = await clientPromise;
        const db = client.db("sample_airbnb");

        const list = await db
            .collection("listingsAndReviews")
            .find()
            .limit(5)
            .toArray();

        res.status(200).json(list);
    } catch (e) {
        console.error(e);
    }
}
