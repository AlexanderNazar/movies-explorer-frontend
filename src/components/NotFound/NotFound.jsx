import './NotFound.css';

function NotFound({ text }) {

return (
  <div className="not-found">
    <h2 className="not-found__text">{text}</h2>
  </div>
  );
}

export default NotFound;