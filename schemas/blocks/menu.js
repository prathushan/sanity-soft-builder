import menuitem from "./menuitem";
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
      validation: Rule => Rule.custom((menuItems) => {
        const checkSubmenus = (items, path = []) => {
          return items.every(item => {
            if (path.includes(item._key)) return false; // Circular reference check
            return item.submenuItems ? checkSubmenus(item.submenuItems, [...path, item._key]) : true;
          });
        };
        return checkSubmenus(menuItems) || 'Circular menu reference detected!';
      }),
    },
  ],
};
