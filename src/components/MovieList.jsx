import React, { Component } from 'react'

class MovieList extends Component {

    renderMovie = () => {
        // mengubah data menjadi img
        let hasil = this.props.data.map((val, index) => {
            return (
                <img className="m-3"
                    src= {val.Poster}
                    key = {index}
                
                />
            )
        })
        return hasil
    } 

    render() {
        return (
            <div>
                {this.renderMovie()}
            </div>
        )
    }


}


export default MovieList