import React from 'react';
import './User.css';

const User = (props) => {
    const friend = props.friend;

    // by simple if, else
    let greetings;
    if (friend) {
        greetings = <p>Welcome, My Friend</p>
    }
    else{
        greetings = <p>Who The Hell You are!</p>
    }

    // by javascript ternary operator.
    let food = friend ? <p>I will buy food for you</p>
                      :  <p>Get Lost and Die</p> 
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                   {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {food }
                
            </div>
            <div>
                <h2>Connection</h2>
                {
                    // by logical AND nd NOR
                    friend && <p>Let's join my Facebook</p> || <p>I don't add Stranger</p>
                }
            </div>
        </div>
    );
};

export default User;