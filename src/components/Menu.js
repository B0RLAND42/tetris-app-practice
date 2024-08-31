import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="menu">
    <h1>TETRIS</h1>
    <button className="button" onClick={onClick}>Play TETRIS</button>
  </div>
);

export default Menu;