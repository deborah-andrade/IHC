// Header.tsx

import React, { useState } from "react";
import Fundo from "../img/Home (2).png";
import Menu from "./Menu";

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>(''); // Estado para acompanhar o item ativo no menu

  return (
    <div className="header-container">
      <div className="img-container">
        <img className="header-img" src={Fundo} alt="fundo" />
        
        <div className="image-overlay">
          <div className="image-text">
            "Harry Potter" is a film series following the adventures of a young wizard named Harry Potter, from his discovery of his magical abilities to his confrontation with the dark wizard Lord Voldemort. Throughout the films, Harry, along with his friends Ron and Hermione, faces challenges and dangers as they try to thwart Voldemort's evil plans and uncover secrets about his own past and the wizarding world. The series is known for its rich setting, impressive visual effects, and themes of friendship, courage, and love.
          </div>
        </div>

        <div className="image-overlay-second">
          <div className="image-text-second">
          Fantasy, Adventure
          2011
          </div>

          <div className="button-container">
            <button className="button">Watch Now</button>
            <button className="button">Read About</button>
          </div>
        </div>

        

        <MenuOverlay setActiveItem={setActiveItem} /> {/* Passando setActiveItem como propriedade */}
      </div>
    </div>
  );
};

const MenuOverlay: React.FC<{ setActiveItem: (item: string) => void }> = ({ setActiveItem }) => {
  return (
    <div className="menu-overlay">
      <Menu setActiveItem={setActiveItem} /> {/* Passando setActiveItem como propriedade */}
    </div>
  );
};

export default Header;

