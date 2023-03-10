import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="searchContainer">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search"
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchImg"
            />
          </div>

          <ul className="usersList">
            {searchResults.map(eachUser => (
              <DestinationItem userDetails={eachUser} key={eachUser.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
