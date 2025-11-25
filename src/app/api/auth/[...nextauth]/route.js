import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../../../lib/db";
import bcrypt from 'bcryptjs';

const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { db } = await connectDB();
                const user = await db.collection('users').findOne({ email: credentials.email });

                if (!user) throw new Error('User not found');

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) throw new Error('Wrong Password');

                return { id: user._id.toString(), name: user.name, email: user.email };
            }
        }),

    ],

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (token?.id) {
                session.user.id = token.id;
            }
            return session;
        },
    },

    pages: {
        signIn: '/auth/login',
        signIn: '/auth/register',
    },


})

export { handler as GET, handler as POST }