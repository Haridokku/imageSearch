import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="profile-pic" alt={name} />
      <p className="head">{name}</p>
    </li>
  )
}

export default DestinationItem
