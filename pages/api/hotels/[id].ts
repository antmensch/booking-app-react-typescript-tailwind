import clientPromise from "../../../src/utils/mongodb/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    try {
        const client = await clientPromise;
        const db = client.db("sample_airbnb");

        const hotel = await db
            .collection("listingsAndReviews")
            .find({ _id: id })
            .toArray();

        res.status(200).json(hotel);
    } catch (e) {
        console.error(e);
    }
}
