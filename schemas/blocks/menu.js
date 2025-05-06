import menuitem from "./menuitem"
import { FaHeading } from 'react-icons/fa';

export default {
  name: 'menu',
  title: 'Header',
  type: 'document',
  icon: FaHeading,
  fields: [
    {
      name: 'title',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'headerLogo',
      title: 'Header Logo',
      type: 'image',
      
      
      
    },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'menuitem' }],
    },
  ],
};