import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        namaMovie: ""
    }

    onChangeText = (e) => {
        this.setState({namaMovie:e.target.value})

    }

    onSubmitForm = (e) => {
        // agar fungsi dijalankan saat ditekan "enter"
        e.preventDefault()

        this.props.list(this.state.namaMovie)
        

    }
    


    render(){

        return(
            
            <div>
               
<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand font-weight-bold" href="#">
    GIOVAN MOVIES </a>
</nav>

                <h3 className="text-center m-3">Search Movies</h3>
                <form className="form-group mt-5" 
                    onSubmit={ this.onSubmitForm}>
                    <input type="text" 
                           onChange = {this.onChangeText }
                           className = "form-control" 
                           placeholder="Type Something"/>
                </form>
            </div>

        )

    }



}

export default SearchBar

