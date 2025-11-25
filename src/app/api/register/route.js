import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/db";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const { db } = await connectDB();

        const exists = await db.collection("users").findOne({ email });
        if (exists) return Response.json({ error: "Email already used" }, { status: 400 });

        const hashed = await bcrypt.hash(password, 10);

        await db.collection("users").insertOne({ name, email, password: hashed });

        return Response.json({ message: "User created" }, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}
