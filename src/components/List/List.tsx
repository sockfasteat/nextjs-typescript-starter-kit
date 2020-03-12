import React from 'react'
import { Dog } from '../../interfaces';
import ListItem from './ListItem';

type Props = {
  items: Dog[]
}

const List: React.FC<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List
