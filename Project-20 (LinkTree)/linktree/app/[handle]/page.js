import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 0));
  if (!params?.handle) {
    return notFound();
  }

  const handle = params.handle.toLowerCase();

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ username: handle });

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        {item.image && (
          <img
            src={item.image}
            alt={`${item.username}'s profile`}
            className="w-32 h-32 rounded-full mx-auto"
          />
        )}
        <span className="font-bold text-xl pb-5 block">@{item.username}</span>

        <div className="links">
          {item.links?.map((link, index) => (
            <div key={index} className="my-4 px-1 flex justify-center">
              <a
                href={link}
                className="py-2 px-4 bg-white rounded-lg w-full max-w-xs text-center hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import clientPromise from "@/lib/mongodb";
// import { notFound } from "next/navigation";

// export default async function Page({ params }) {
//   console.log("🚀 Received Params:", params);

//   if (!params || !params.handle) {
//     console.log("❌ Handle is undefined! Check your route setup.");
//     return notFound();
//   }

//   const handle = params.handle;

//   const client = await clientPromise;
//   const db = client.db("linktree");
//   const collection = db.collection("links");

//   const item = await collection.findOne({ username: handle });

//   if (!item) {
//     console.log("❌ No user found in MongoDB for handle:", handle);
//     return notFound();
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         {item.image && (
//           <img
//             src={item.image}
//             alt={`${item.username}'s profile`}
//             className="w-32 h-32 rounded-full mx-auto"
//           />
//         )}
//         <span className="font-bold text-xl pb-5 block">@{item.username}</span>

//         <div className="links">
//           {item.links?.map((link, index) => (
//             <div key={index} className="my-4 px-1 flex justify-center">
//               <a
//                 href={link}
//                 className="py-2 px-4 bg-white rounded-lg w-full max-w-xs text-center hover:bg-gray-100 transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {link}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import clientPromise from "@/lib/mongodb";
// import { notFound } from "next/navigation";

// export default async function Page({ params }) {
//   const handle = params.handle;
//   const client = await clientPromise;
//   const db = client.db("linktree");
//   const collection = db.collection("links");

//   const item = await collection.findOne({ username: handle });

//   // Handle case where no user is found
//   if (!item) {
//     console.log("❌ Handle is undefined!");
//     return notFound();
//   }

//   return (
//     <div className="flex justify-center items-center text-rose-800 bg-pink-300 min-h-screen">
//       <div className="pic text-center">
//         {/* Check if image exists before rendering */}
//         {item.image && (
//           <img
//             src={item.image}
//             alt={`${item.username}'s profile`}
//             className="w-32 h-32 rounded-full mx-auto"
//           />
//         )}

//         <span className="font-bold text-xl pb-5 block">@{item.username}</span>

//         <div className="links">
//           {item.links?.map((link, index) => (
//             <div key={index} className="my-4 px-1 flex justify-center">
//               <a
//                 href={link}
//                 className="py-2 px-4 bg-white rounded-lg w-full max-w-xs text-center hover:bg-gray-100 transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {link}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import clientPromise from "@/lib/mongodb";
// import { notFound } from "next/navigation";

// export default async function Page({ params }) {
//   const handle = (await params).handle;
//   const client = await clientPromise;
//   const db = client.db("linktree");
//   const collection = db.collection("links");

//   const item = await collection.findOne({ handle: handle });
//   if (!item) {
//     return notFound();
//   }

//   console.log(item);

//   const item2 = {
//     _id: {
//       $oid: "67d86ea93f494408d51c0b30",
//     },

//     username: "testuser",
//     links: ["https://example.com", "https://another-example.com"],
//     image: "null",
//     createdAt: {
//       $date: "2025-03-17T18:49:13.202Z",
//     },
//   };
//   return (
//     <div className="flex justify-center items-center text-rose-800 bg-pink-300 min-h-screen">
//       {item && (
//         <div className="pic">
//           <img src={item.pic} alt="profile" />
//           <span className="font-bold text-xl pb-5">@{item.handle}</span>
//           <div className="links">
//             {item.links.map((link, index) => {
//               <div key={index} className="my-4 px-1 flex justify-center">
//                 <a
//                   href={item.link}
//                   className=" py-2 px-4   bg-white rounded-lg "
//                 >
//                   {link}
//                 </a>
//               </div>;
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // import clientPromise from "@/lib/mongodb";
// // import { notFound } from "next/navigation";

// // export default async function Page({ params }) {
// //   const client = await clientPromise;
// //   const handle = params.handle;
// //   const db = client.db("linktree");
// //   const collection = db.collection("links");

// //   const item = await collection.findOne({ username: handle });

// //   // Handle case where no user is found
// //   if (!item) {
// //     notFound();
// //   }

// //   return (
// //     <div className="flex justify-center items-center text-rose-800 bg-pink-300 min-h-screen">
// //       <div className="pic">
// //         {/* Fixed image source syntax and added null check */}
// //         {item.image && (
// //           <img
// //             src={item.image}
// //             alt={`${item.username}'s profile`}
// //             className="w-32 h-32 rounded-full mx-auto"
// //           />
// //         )}

// //         <span className="font-bold text-xl pb-5 block text-center">
// //           @{item.username}
// //         </span>

// //         <div className="links">
// //           {item.links?.map((link, index) => (
// //             <div key={index} className="my-4 px-1 flex justify-center">
// //               <a
// //                 href={link}
// //                 className="py-2 px-4 bg-white rounded-lg w-full max-w-xs text-center hover:bg-gray-100 transition-colors"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 {link}
// //               </a>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
