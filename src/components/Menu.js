import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="menu">
    <button className="button" onClick={onClick}>Play TETRIS</button>
  </div>
);

export default Menu;