import React from 'react';
import './Custom.css';

export class Navigation extends React.Component {

    handleListButton =((e)=>{
        const buttonText = e.target.innerText;
        if(buttonText === 'MENU'){
            window. open('https://www.google.co.uk/');
        }
        if(buttonText === 'LOCATION'){
            window. open('https://www.google.com/maps');
        }
        if(buttonText === 'ABOUT'){
            window. open('https://www.google.co.uk/');
        }
        if(buttonText === 'CONTACT'){
            window. open('https://www.google.co.uk/');
        }
    });

    
    render() {
        return (
        <div>
            <nav className='NavBar'>
            <div>
                <img src='/images/nike_logo.png' alt="Nike" width="80" height="60" />
            </div>
            <div>
                <ul className='UlPanel'>
                <li onClick={this.handleListButton}>MENU</li>
                <li onClick={this.handleListButton}>LOCATION</li>
                <li onClick={this.handleListButton}>ABOUT</li>
                <li onClick={this.handleListButton}>CONTACT</li>
                </ul>
            </div>
            <div>
                <button type='button'>Login</button>
            </div>
            </nav>
        </div>
        )
  }
}

export default Navigation
