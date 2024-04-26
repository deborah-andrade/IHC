// Menu.tsx

import React from 'react';

interface MenuProps {
  setActiveItem: (item: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setActiveItem }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div onClick={() => setActiveItem('Home')} style={{ padding: '10px', cursor: 'pointer' }}>Home</div>
      <div onClick={() => setActiveItem('Films')} style={{ padding: '10px', cursor: 'pointer' }}>Films</div>
      <div onClick={() => setActiveItem('Posters')} style={{ padding: '10px', cursor: 'pointer' }}>Poster's</div>
    </div>
  );
};

export default Menu;
