import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import data from './data';
import Count from './components/Count';


class App extends Component {
  constructor(){
    super();

    this.state = {
      profiles: data,
      currentProfile: 0, 
      count: 1 
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  handleClickNext(){
    if(this.state.currentProfile === 24){
        this.setState({currentProfile: 0}) 
    }else{
        this.setState({currentProfile: this.state.currentProfile + 1})
    }   
}

handleClickPrevious(){
    if(this.state.currentProfile === 0) {
        this.setState({currentProfile: 24})
    }else{
        this.setState({currentProfile: this.state.currentProfile - 1})
    }
} 

  render(){
    const profilesMap = this.state.profiles.map((profile, index) => {
      if(this.state.currentProfile === index){
        return <Profile key={profile.id} profile={profile} />
      }
    })

    return (
      <div>
        <header>Home</header>

        <main>
          <div className='Profile-Info'>{profilesMap}</div>

          <aside>
            <Count className="Count" currentIndex={this.state.currentProfile}/>
          </aside>
        </main>

        <span className='PN-Buttons'>
            <button onClick={this.handleClickPrevious}>Previous</button>
            <button onClick={this.handleClickNext}>Next</button>
        </span>

      </div>
      
    );
  }
  
}

export default App;



