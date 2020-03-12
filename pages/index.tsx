import { NextPage } from 'next';
import Layout from '../src/components/layout/Layout';


const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1 className="text-2xl font-bold text-purple-500">Hello world! - user agent: {userAgent}</h1>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
