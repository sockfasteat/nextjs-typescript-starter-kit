import { NextPage } from 'next';
import ErrorBoundary from './ErrorBoundary';
import Head from 'next/head';

type Props = {
  title?: string
}

const Layout: NextPage<Props> = (
  {
    children,
    title = 'Nest.js Starter Kit - Default Title',
  }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ErrorBoundary>
        <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
          { children }
        </div>
      </ErrorBoundary>
    </>
  )
};

export default Layout;

