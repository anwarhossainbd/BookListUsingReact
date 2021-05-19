import React, {Component} from 'react';
import Book from "./Book";
import {Button} from "react-bootstrap";
import '../App.css';
import "../Assets/Book.css"
import BookList from '../Assets/data'

 import BookList2 from "../Components/Lists/BookList"


class MainComponents extends Component {
    constructor() {
        super();
        this.state={
            books:BookList,
            toggle:true,
        }
    }



    // ChangeBookStage=(singlaPara)=>{
    //      this.setState({
    //          books:[
    //              {BookName:singlaPara, writter:"Imam Bukhari"},
    //              {BookName:"Musnade Ahamed", writter:"Ahamed Bin Hammble"},
    //              {BookName:"Muslim", writter:"Imam Muslim"}
    //          ]
    //      })
    // }



    changeWithInputState=(event,index)=>{

        const book ={...this.state.books[index]}
        book.BookName=event.target.value ;
        const books=[...this.state.books];
        books[index]=book;
        this.setState({
            books:books
        })
    }

    changeWithInputState2=(event,index)=>{

        const book ={...this.state.books[index]}
        book.writter=event.target.value ;
        const books=[...this.state.books];
        books[index]=book;
        this.setState({
            books:books
        })
    }




    toggleBooks=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }



    deleteBookState=(index)=>{

        const book=[...this.state.books]
        book.splice(index,1)
        this.setState({
            books:book
        })
    }


    render() {


        let singleData = null

        if (this.state.toggle){
            singleData= <BookList2 books={this.state.books} changeWithInputState2={this.changeWithInputState2} changeWithInputState={this.changeWithInputState}  deleteBookState={this.deleteBookState} />
        }



        return (
            <div>
                <div className="App">

                    <h1 className="Headline">BOOK List</h1>


                    <Button className="button" onClick={this.toggleBooks} variant="success">Hide Books</Button>


                    {singleData}

                </div>
            </div>
        );
    }
}


export default MainComponents;








