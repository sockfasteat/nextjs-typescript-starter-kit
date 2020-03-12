import React from 'react'
import { Dog } from '../../interfaces';
import Link from 'next/link';

type ListDetailProps = {
  item: Dog
}

const ListDetail: React.FunctionComponent<ListDetailProps> = (
  {
    item: user,
  }) => (
  <div>
    <h1 className="text-gray-900 font-bold text-xl mb-2">Detail for {user.name}</h1>
    <p className="text-gray-700 text-base">
      ID: {user.id}
    </p>
    <Link href="/dogs">
      <a className="text-blue-400 hover:text-blue-700">
        Go back to List
      </a>
    </Link>
  </div>
);

export default ListDetail
