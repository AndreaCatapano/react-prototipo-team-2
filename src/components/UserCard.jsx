import { Link } from "react-router-dom"


function UserCard({ user }) {

  return (
    <div className="container col col-12 col-md-6 col-lg-4">
      <div className="d-grid p-3">
        <Link
          to={`/users/${user.id}`}
          className="general-btn btn p-3"
        >
          <h3>{user.firstName} {user.lastName}</h3>
        </Link>
      </div>
    </div>
  )
}

export default UserCard