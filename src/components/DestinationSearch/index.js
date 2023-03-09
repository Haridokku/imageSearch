// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  {destinationsList} = this.props

  state = {
    searchInput: '',
    destinationList: destinationsList,
  }

  onChangeSearchInput =(event) =>{
      this.setState({searchInput : event.target.value})
  }

  render() {
      const {searchInput,destinationList} = this.state
      const searchResults =destinationList.filter((each)=> (each.name.includes(searchInput)))
    
    return (
        <div className="container">
            <h1 className="heading">Destination Search</h1>
            <div className="searchContainer">
                <input type="search" onChange={this.onChangeSearchInput} value={searchInput} />
                <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="searchImg" />

            </div>
            
            <ul className="usersList">
                {searchResults.map((eachUser) =>(<DestinationItem userDetails={eachUser} key = {eachUser.id} />))}
            </ul>
        </div>
    )
  }
}

export default DestinationSearch
