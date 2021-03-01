import { render } from '@testing-library/react';
import * as React from 'react';
import './style.css';
class Movie extends React.Component {
render() {
    return<div className='Movie-card'>
        <img src= {this.props.link}/>
        <label>{this.props.likes} {this.props.name}</label>
    </div>
    
}
}
export default Movie; 