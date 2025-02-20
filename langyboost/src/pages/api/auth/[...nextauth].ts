import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID || '',
            clientSecret: process.env.FACEBOOK_SECRET || '',
            authorization: {
                params: {
                    scope: 'email,public_profile',
                },
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],
});
