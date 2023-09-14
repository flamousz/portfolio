import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request) {
	try {

		const data = JSON.parse(fs.readFileSync("./data/pets.json", "utf8"));
		for (const el of data) {
			await sql`INSERT INTO Pets (Name, Owner) VALUES (${el.name}, ${el.owner})`;
		}

		const result = await sql`SELECT * FROM Pets;`;

		return NextResponse.json({ result: result.rows }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
