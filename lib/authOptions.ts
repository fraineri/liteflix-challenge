import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prismadb } from "./prismadb";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      // console.log(">>> session", session, token);
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      // console.log(">>> JWT", token, user);
      const dbuser = await prismadb.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbuser) {
        token.id = user!.id;
        return token;
      }

      if (!dbuser.username) {
        await prismadb.user.update({
          where: {
            id: dbuser.id,
          },
          data: {
            username: nanoid(10),
          },
        });
      }

      return {
        id: dbuser.id,
        name: dbuser.name,
        email: dbuser.email,
        picture: dbuser.image,
        username: dbuser.username,
      };
    },

    redirect() {
      return "/";
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => getServerSession(authOptions);
