import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { username, links, image } = await request.json();

    // Validation
    if (!username?.trim() || !links?.length) {
      return NextResponse.json(
        { success: false, message: "Username and at least 1 link required" },
        { status: 400 }
      );
    }

    // Connect to DB (using shared clientPromise)
    const client = await clientPromise;
    const db = client.db("linktree");

    // Insert data
    const result = await db.collection("links").insertOne({
      username: username.trim().toLowerCase(), // Critical fix
      links: links.filter((link) => link.trim()),
      image: image || null,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Profile saved!",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Database error" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// // Shared connection setup
// let client;
// let db;

// async function connectDB() {
//   if (!client) {
//     client = new MongoClient(process.env.MONGODB_URI);
//     await client.connect();
//     db = client.db("linktree"); // Remove 'const' to use the outer db variable
//     console.log("✅ Connected to MongoDB");
//   }
//   return db;
// }

// export async function POST(request) {
//   try {
//     const { username, links, image } = await request.json();

//     // Validation
//     if (!username?.trim() || !links?.length) {
//       return NextResponse.json(
//         { success: false, message: "Username and at least 1 link required" },
//         { status: 400 }
//       );
//     }

//     // Connect to DB
//     const db = await connectDB();

//     // Insert data
//     const result = await db.collection("users").insertOne({
//       username: username.trim(),
//       links: links.filter((link) => link.trim()),
//       image: image || null,
//       createdAt: new Date(),
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Profile saved!",
//       insertedId: result.insertedId,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { success: false, message: error.message || "Database error" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// // Shared connection
// const client = new MongoClient(process.env.MONGODB_URI);
// let db;

// async function connectDB() {
//   if (!db) {
//     await client.connect();
//     const db = client.db("linktree"); // Now uses DB name from MONGODB_URI
//   }
//   return db;
// }

// export async function POST(request) {
//   try {
//     const { username, links, image } = await request.json();

//     // Validation
//     if (!username?.trim() || !links?.length) {
//       return NextResponse.json(
//         { success: false, message: "Username and at least 1 link required" },
//         { status: 400 }
//       );
//     }

//     // Connect to DB
//     const db = await connectDB();

//     // Insert data
//     const result = await db.collection("users").insertOne({
//       username: username.trim(),
//       links: links.filter((link) => link.trim()),
//       image: image || null,
//       createdAt: new Date(),
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Profile saved!",
//       insertedId: result.insertedId,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { success: false, message: error.message || "Database error" },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// export async function POST(request) {
//   try {
//     // Use request.json() since you're sending JSON data
//     const { username, links, image } = await request.json();

//     // Validate required fields
//     if (!username || !links) {
//       return NextResponse.json(
//         { success: false, message: "Username and links are required" },
//         { status: 400 }
//       );
//     }

//     // Connect to MongoDB
//     const client = new MongoClient(process.env.MONGODB_URI);
//     await client.connect();
//     const db = client.db();

//     // Insert data
//     const result = await db.collection("users").insertOne({
//       username,
//       links,
//       image: image || "",
//       createdAt: new Date(),
//     });

//     await client.close();

//     return NextResponse.json({
//       success: true,
//       message: "Data saved successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message || "Internal server error",
//       },
//       { status: 500 }
//     );
//   }
// }
