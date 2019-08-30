import React, { Component } from 'react'
import axios from "axios"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"

class App extends Component {

    state = {
        images: [] // akan dikirim ke props data, dan dikirim ke comp. MovieList
    }              // 

    onSearchSubmit = (namaMovie) => {
        // API, mengambil data film
        axios.get(
            "http://www.omdbapi.com",
        
           {
            // params: digunakan saat ingin mengambil data yang lebih spesifik
            params: {
                apikey: "e4bd6765", 
                s: namaMovie

            }
            // data yang diambil, lalu akan digunakan
            // Jika berhasil
            // update state untuk property 'images', di isi dengan hasil search gambar
        }).then((res) => {
            console.log(res);
            
            //setState akan mengubah data yang ada dalam state
            this.setState({images:res.data.Search})
            
            // jika link rusak maka akan error
        }).catch((err) => {
            console.log(err)
        })

    }


    render() {
        // kirim props "list" ke Search Bar dan Props "data" ke MovieList
        return (
            <div className="container">
                <SearchBar list = {this.onSearchSubmit}/>
                <MovieList data = {this.state.images}/>
            </div>
        )
    }
}



export default App

/* 
    App: merupakan parent component
    Search Bar dan MovieList: Child Component 

*/