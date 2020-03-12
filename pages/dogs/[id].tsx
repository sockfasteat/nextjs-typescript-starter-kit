import React from 'react';
import { NextPageContext } from 'next';
import { Dog } from '../../src/interfaces';
import { sampleFetchWrapper } from '../../src/utils/sample-api';
import Layout from '../../src/components/layout/Layout';
import ListDetail from '../../src/components/List/ListDetail';

type Props = {
  item?: Dog
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await sampleFetchWrapper(
        `http://localhost:3000/api/dogs/${Array.isArray(id) ? id[0] : id}`
      );
      return { item };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${
          item ? item.name : 'Dog Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    )
  }
}

export default InitialPropsDetail
