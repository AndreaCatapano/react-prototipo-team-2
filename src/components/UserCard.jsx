import { Link } from "react-router-dom";
import "../style/UserCard.css";

function UserCard({ user }) {
  return (
    <div className="container col col-12 col-md-6 col-lg-4 user-card-container">
      <div className="user-card-grid">
        <Link to={`/users/${user.id}`} className="user-card-link">
          <h3 className="user-card-title">
            {user.firstName} {user.lastName}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
