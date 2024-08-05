
import React from 'react';
function func(event)
{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    alert(` Name: ${name}\nAge: ${age}\nPhone:${phone}\nEmail:${email}`);
}
function fo ()
{
    return (
        <div>
            <form onSubmit={func}>
                <label>Name: </label>
                <input type = "text" id ="name" name="name"></input>
                <br>
                </br>
                <label>Age: </label>
                <input type="number" id="age" name = "age">
                </input>
                <br></br>
                <label>Email: </label>
                <input type="email" id="email" name="email"/>
                <br/>
                <label>phone: </label>
                <input type="phone" id="phone" name="phone"/>
                <br/>
            </form>
        </div>
    )
}
export default fo