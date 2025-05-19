import { Link } from "react-router-dom"


function UserCard({ user }) {

  return (
    <Link to={`/users/${user.id}`} className="col col-12 col-md-6 col-lg-4 text-decoration-none">
      <div className="card btn btn-light shadow-sm p-3 mb-2">
        <div className="card-body">
          <h3>{user.firstName} {user.lastName}</h3>
        </div>
      </div>
    </Link>
  )
}

export default UserCard