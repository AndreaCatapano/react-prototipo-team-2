import { Link } from "react-router-dom"


function UserCard({ user }) {

  return (
    <Link to={`/users/${user.id}`} className="col col-6 col-lg-4 text-decoration-none">
      <div className="card">
        <div className="card-body">
          <h3>{user.firstName} {user.lastName}</h3>
        </div>
      </div>
    </Link>
  )
}

export default UserCard