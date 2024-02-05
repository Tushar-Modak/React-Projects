import React from 'react';
import './Custom.css';

export class BodyPanel extends React.Component {
 
  render() {
    return (
      <div className='Body-Panel'>
        <div className='Body-Content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.</p>
            <div className='Button-Panel'>
                <button>Shop Now</button>
                <button className='Cat_btn'>Category</button>
            </div>
        </div>
        <div className='Body-Image'>
            <img src='/images/Nike-Shoes.png' height='450' width='550'></img>
            <h1 className='Price-Tag'>$500</h1>
        </div>
      </div>
    )
  }
}

export default BodyPanel
