import React from 'react';
import CardList from './Components/CardList/Card-List.component';
import { Component } from 'react';
import SearchBox from './Components/SearchBox/Search-Box.component';
import './App.css';

class App extends Component {
constructor(){
 super()
 this.state={monsters:[],searchField:""}
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposnse=>resposnse.json())
  .then(user=>this.setState({monsters:user}))
}
handleChange=(event)=>this.setState({searchField:event.target.value},()=>console.log(this.state.searchField))

render(){
  const{monsters,searchField}=this.state
  const filteredMonsterList = monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return<div className="App">
  <h1>Monsters Rolodex</h1>
  <SearchBox placeholder="search Monsters" handleChange={this.handleChange} />
  <CardList monsters={filteredMonsterList}/>
  </div>
}

}

export default App;
