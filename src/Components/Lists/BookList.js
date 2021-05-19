import React from 'react';
import Book from "../Book";

const BookList = (props) => {
    return (


            props.books.map((data,index)=>{
            return (
            <Book
            BookName={data.BookName}
            writter={data.writter}
            delete={()=> props.deleteBookState(index)}
            key={index}
            inputName={(event)=>props.changeWithInputState(event,index)}
            inputName2={(event)=>props.changeWithInputState2(event,index)}
            />
            )
        })


    );
};

export default BookList;