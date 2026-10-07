//import necessary headers and links
import styled from "styled-components"; //for styling
import type {BookAttributes} from "../type/BookAttributes.ts"; //for book types (assigned types in this file)

//STYLING SECTION of various sections of web page
//for website squares
const BooksDiv = styled.div` //(custom styled div tag)
    //for keeping info in squares on website (seen in rick and morty on GitHub example)
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: teal;
`;
//for title - make custom JS/TS tag as shown in lecture 5 to style the title at top of page (h1)
const StyledHeading = styled.h1`//used "styled.(heading type)" for title at top of pg styling - (lecture 5)
    text-align: center; //align in center of pg
    max-width: 100%; //widen scope of styling to full space of top
    padding: 5%; //add padding for spacing 
    margin: 0; //for title to take up whole space
    //color of elements
    background-color: skyblue;
    border: 10px solid dodgerblue;
    //font section
    color: blue;
    font-weight: bold;
    font-size: calc(40px + 1.5vw);
    font-family: Papyrus, Copperplate, fantasy;
    
`;
//for words inside boxes (info we extracted from API about books at library)
const BookAttributesDiv = styled.div`//named BookAttributesDiv to show this styling is being done to info listed as data type in BookAttributes file
    display: flex;
    flex-direction: column;
    justify-content: center;
    //color theme section
    background-color: lightblue;
    border: 10px deepskyblue dashed;
    //words section
    color: deepskyblue;
    font-weight: bold; //make words bold
    font-size: calc(10px + 1.5vw); //use calc for font (lecture 2)
    font-family: Papyrus, Copperplate, fantasy; //declare font family
    //spacing section
    margin: 1%;
    width: 40%; //for size of squares to be displayed on page
    padding: 5px;
`;
//use data.map to display book information on web page
//used h4 to distinguish priority from h1 title
//all wrapped in <AllBooksDiv> for website styling as well as info section
// wrapped in <BooksPreviewDiv> for styling of actual info in boxes on page
//nest function so it looks pretty and all ( and { are lines up
export default function Books(props: { data: BookAttributes[] }) {
    return (
        <>
            <StyledHeading>Library Books</StyledHeading>
            <BooksDiv>
                {
                    props.data.map((book: BookAttributes) => //import types of data from Props file
                        <BookAttributesDiv>
                            <h4>Title: {book.title}</h4>
                            <h4>Year Published: {book.first_publish_year}</h4>
                            <h4>Edition: {book.edition_count}</h4>
                        </BookAttributesDiv>
                    )
                }
            </BooksDiv>
        </>
    );
}