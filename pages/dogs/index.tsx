import { NextPage } from 'next';
import Link from 'next/link';
import { Dog } from '../../src/interfaces';
import { sampleFetchWrapper } from '../../src/utils/sample-api';
import List from '../../src/components/List/List';
import Layout from '../../src/components/layout/Layout';

type Props = {
  items: Dog[]
  pathname: string
}

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Dogs List | Next.js + TypeScript Example">
    <div className="flex flex-col">
      <h1 className="text-gray-900 font-bold text-xl mb-2">Dogs List</h1>
      <p className="text-gray-700 text-base">
        Example fetching data from inside <code>getInitialProps()</code>.
      </p>
      <p className="text-sm text-gray-600 flex items-center mb-4">You are currently on: {pathname}</p>
      <List items={items} />
      <p className="text-blue-400 hover:text-blue-700 flex items-center mt-4">
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Dog[] = await sampleFetchWrapper(
    'http://localhost:3000/api/dogs'
  );

  return { items, pathname }
};

export default WithInitialProps
