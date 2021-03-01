import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './Styles.css';
import movies from './Movies.js';
import './Button.js';

class Movies extends React.Component {
    state = { ...movies };


    getMovie = movie => {
        return <Movie name={movie.name} likes={movie.likes} link={movie.link} button={movie.button} />;

    };

    render() {

        return <div className='Movies-section'>


            {this.getMovie(this.state.maharshi)}

            {this.getMovie(this.state.avengers)}

            {this.getMovie(this.state.atharintikidharedhi)}

        </div>
    }
}
export default Movies;