import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { 
  DEFAULT_LOGIN_REDİRECT,
  apiAuthPrefix, 
  authRoutes, 
  publicRoutes 
} from "./server/route";
import { NextResponse } from "next/server";



const { auth } = NextAuth(authConfig);

export default auth((req) => {

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute  = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute    = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute){
    return NextResponse.next();
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDİRECT,nextUrl));
    };
    return NextResponse.next();
  };

  if(!isLoggedIn && isPublicRoute){
    return Response.redirect(new URL("/auth/login",nextUrl));
  };

  return NextResponse.next();

});


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};