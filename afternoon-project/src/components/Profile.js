import React, {Component} from 'react';
import ProfileInfo from './ProfileInfo';
import data from '../data';


class Profile extends Component {
    constructor(){
        super();

        this.state = {
            profiles: data,
            currentProfile: 0,
            count: 1
        }
        this.handleClickNext = this.handleClickNext.bind(this)
        this.handleClickPrevious = this.handleClickPrevious.bind(this)
        this.countUp = this.countUp.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    handleClickNext(){
        if(this.state.currentProfile === 24){
            this.setState({currentProfile: 0}) 
        }else{
            this.setState({currentProfile: this.state.currentProfile + 1})
        }   
        this.countUp()
    }

    handleClickPrevious(){
        if(this.state.currentProfile === 0) {
            this.setState({currentProfile: 24})
        }else{
            this.setState({currentProfile: this.state.currentProfile - 1})
        }
        this.countDown()
    }

    countUp(){
        let lastIndex= this.state.profiles.length-1;
        for(let i=0; i <= lastIndex; i++){
            if(i === 0){
                this.setState({count: 1})
            }else if(i === lastIndex){
                this.setState({count: 25})
            }else{
                this.setState({count: i =1})
            }
        }
    }

    countDown(){
        this.setState({count: this.state.currentProfile - 1})
    }

    render(){
        const profilesMap = this.state.profiles.map( (profile, index) => {
            if(this.state.currentProfile === index){
                return <ProfileInfo key={profile.id} profile={profile}/>
            }
        })
        
        return(
            <div>
                <h1 className='Count'>{this.state.count}/25</h1> 
                <div className="Profile"> {profilesMap}</div>
                <span className="PN-Buttons">
                    <button onClick={this.handleClickPrevious}>Previous</button>
                    <button onClick={this.handleClickNext}>Next</button>
                </span>
            </div>
        )
    }
}

export default Profile;

// current profile is equal same as the profile at the current index from map

//so currentProfile is equal to the index of the array of data (profiles)
//this number is going to change every time someone clicks the next or previous buttons
