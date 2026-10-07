//imports and headers section
import BooksPreview from "./components/BooksPreview.tsx";
import styled from "styled-components" //import styling in react
import {useEffect, useState} from "react"; //import hooks for project
import type {BookAttributes} from "./type/BookAttributes.ts"; //import types of data

//styling section
const MainDiv=styled.div` //for wrapping entire project below and so styling doesnt error out
    border: blue solid 5px; //double border for more color on website
    //not required in project instructions to fit but just looks better  
    margin: auto;
    max-width: 100%; //do full page width
`;

//function for fetching url of Library books API found on
//used export default function app rather than export app at bottom as
//I saw that done in Rick and Morty example and thought it was more organized with less code lines
//to improve visibility and have less code verbosity
export default function App() {
    //for data storage= using useState
    const [books, setBooks] = useState<BookAttributes[]>([])
//use docs as in txt file docs is used to define array before info is read ( checked long txt file)
    //used #30 "Open Library" from provided website : https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
    useEffect(() => { //use hook useEffect for error handling/ re-render
        async function fetchBooks():Promise<void> {
            const res = await fetch(`https://openlibrary.org/search.json?q=the+lord+of+the+rings`);
            const {docs}: {docs: BookAttributes[]} = await res.json();
            setBooks(docs);
        }
        //for fetching and errors
        fetchBooks() //prompts for success / failure of fetching API data
            .then(() => console.log("Data fetched successfully from API"))
            .catch((e: Error) => console.log("This is the error right here:" + e));
    }, [books.length]);

    return ( //wrap data in <Div> tag created for styling
        <MainDiv>
            <BooksPreview data={books}/>
        </MainDiv>
    )
}

