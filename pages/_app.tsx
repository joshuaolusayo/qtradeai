import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import AuthProvider from '../components/auth/AuthContext';
import nextCookie from 'next-cookies';
import 'tailwindcss/tailwind.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

/**
 * Check if user is accessing a route that requires a logged in session and redirect them
 * to the login page if they are not logged in. This will also be used for permissions
 */
MyApp.getInitialProps = async function (appContext: AppContextType) {
  const { ctx } = appContext;
  const { publicKey } = nextCookie(ctx);

  const protectedRoutes = [
    { route: '/' },
    { route: '/order' },
    { route: '/gei-packages' },
    { route: '/stockist' },
    { route: '/ranks' },
    { route: '/beep-estate' },
    { route: '/account' },
    { route: '/logs' },
    { route: '/profile' },
    { route: '/change-password' },
    { route: '/edit-profile' },
    { route: '/update-kyc' },
  ];

  // check if user is accessing a protected route
  if (protectedRoutes.some(({ route }) => route === ctx.pathname)) {
    try {
      // no token means they aren't logged in, so we push user to the login page
      if (!publicKey) throw Error;
    } catch (error) {
      return redirectTo(`/login?redirectUrl=${ctx.req?.url ?? '/'}`, appContext);
    }
  }
  return {};
};

function redirectTo(url: string, appContext: AppContextType) {
  const { ctx, router } = appContext;
  if (typeof window === 'undefined') {
    ctx.res &&
      ctx.res.writeHead(302, {
        Location: url,
      });
    ctx.res && ctx.res.end();
  } else {
    router.push(url);
  }
  return {};
}

export default MyApp;
