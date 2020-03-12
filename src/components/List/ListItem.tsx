import React from 'react'
import Link from 'next/link'
import { Dog } from '../../interfaces';

type Props = {
  data: Dog
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/dogs/[id]" as={`/dogs/${data.id}`}>
    <a className="text-blue-400 hover:text-blue-700">
      Go to {data.name}
    </a>
  </Link>
);

export default ListItem
