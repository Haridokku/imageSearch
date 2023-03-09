// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="profile-pic" alt="profile-pic" />
      <h1 className="head">{name}</h1>
    </li>
  )
}

export default DestinationItem
