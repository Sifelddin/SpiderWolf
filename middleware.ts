import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextauth.token?.role === 'USER') {
      NextResponse.redirect('/profile');
    }
    if (req.nextauth.token?.role === 'ADMIN') {
      NextResponse.redirect('/admin');
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === 'USER';
      },
    },
  },
);

export const config = { matcher: ['/', '/protected','/profile','/admin'] };
