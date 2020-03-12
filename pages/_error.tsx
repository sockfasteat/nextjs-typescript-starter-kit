import { NextPage } from 'next';
import { FiveHundredError, FourZeroFour } from '../src/components/errors';

const Error: NextPage<{ statusCode?: number | null }> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <FourZeroFour />;
  }
  return <FiveHundredError />;
};
// function Error({ statusCode }) {
//   if (statusCode === 404) {
//     return <FourZeroFour />;
//   }
//   return <FiveHundredError />;
// }

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
