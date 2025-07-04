// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         // Replace this with your own authentication logic
//         if (email === "test@example.com" && password === "password123") {
//           return { id: 1, name: "Test User", email };
//         }
//         throw new Error("Invalid credentials");
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Dummy user validation - replace with real logic
//         if (
//           credentials.email === "test@example.com" &&
//           credentials.password === "password"
//         ) {
//           return { id: 1, name: "Test User", email: "test@example.com" };
//         }
//         return null; // Return null for failed login
//       },
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
