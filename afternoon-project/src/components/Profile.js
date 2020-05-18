import React from 'react';

function Profile({profile}){
    return(
            <div className='Profile-Info'>
                <h1><u>{profile.name.first} {profile.name.last}</u> </h1>
                <p><strong>From:</strong> {`${profile.city}, ${profile.country}`}</p>
                <p><strong>Job Title:</strong> {profile.title} </p>
                <p> <strong>Employer:</strong> {profile.employer} </p>
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
    
export default Profile;



