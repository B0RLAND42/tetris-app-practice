import "./BoardCell.css";

const BoardCell = ({ cell }) => (
  <div className={`boardCell ${cell.className}`}>
    <dir className="sparkle"></dir>
  </div>
);

export default BoardCell;