import React from "react";
import {Link} from '@reach/router'
import Delete from "./Delete";

const AuthorList = (props) => {
    const {authors, setAuthors} = props;
    
    // Callback function to be used for delete component to perform delete operation in front end.
    const removeFromDom = (authorId) => {
        let newList = authors.filter((author) => author._id !== authorId);
        setAuthors(newList);
    }

    return(
        <div>
            <h1>Favorite authors</h1>
            <p>
                <Link to={"/new"}>Add an author</Link>
            </p>
            <h4>We have quotes by:</h4>

            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    { authors.map((author, idx) => {
                    return <tr key={idx}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={"/authors/" + author._id + "/edit"}>
                                Edit
                            </Link>
                            |
                            <Delete authorId={author._id} removeFromDom={removeFromDom} />
                        </td>
                    </tr>
                    })
                    }   
                </tbody>
                
            </table>

            {/* {
                products.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/products/" + product._id} >{product.title}</Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <Delete productId={product._id} removeFromDom={removeFromDom} />
                    </p>
                })
            } */}
        </div>
    )
}

export default AuthorList;