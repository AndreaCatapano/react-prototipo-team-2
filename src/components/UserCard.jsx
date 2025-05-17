import { Link } from "react-router-dom"


function UserCard({ user }) {

  return (
    <Link to={`/users/${user.id}`} className="px-2">
      <div className="col card">
        <div className="card-body">
          <h3>{user.firstName} {user.lastName}</h3>
        </div>
      </div>
    </Link>
  )
}

export default UserCard