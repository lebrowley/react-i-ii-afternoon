import React from 'react';

function ProfileInfo({profile}){
    return(
            <div className='Profile-Info'>
                <h1>{profile.name.first} {profile.name.last}</h1>
                <p>From: {`${profile.city}, ${profile.country}`}</p>
                <p>Job Title: {profile.title} </p>
                <p>Employer: {profile.employer} </p>
                <br/>
                <h3>Favorite Movies:</h3>
                <ol>
                    <li>{profile.favoriteMovies[0]}</li>
                    <li>{profile.favoriteMovies[1]}</li>
                    <li>{profile.favoriteMovies[2]}</li>
                </ol>
                
            </div>
    )
}
    


export default ProfileInfo;



//destructuring correctly... simplifies code
//review how to do this 
//here we have destructured the key profile from the object props and then we are accessing the keys and values from the profile object and rendering them (returning them) on the screen