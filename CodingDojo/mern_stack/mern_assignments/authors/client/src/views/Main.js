import React, {useEffect, useState} from "react";
import axios from 'axios';
import AuthorList from "../components/AuthorList";
const Main = () => {
    // Used to create a new object.
    // const [theAuthor, setTheAuthor] = useState({
    //     name: "",
    // });
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

// Get all authors from back end to use to add to author list.
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    });
// // Create a author and send it to the back end.
//     const createAuthor = e => {
//         axios.post('http://localhost:8000/api/authors', theAuthor)
//             .then(res=>{
//                 console.log(res);
//                 setTheAuthor({
//                     name: "",
//                 })
//             })
//     }

    return(
        <div>
            {/* <ProductForm author={theAuthor} setAuthor={setTheAuthor} onSubmitProp={createAuthor}/>
            <hr/> */}
            {loaded && <AuthorList authors={author} setAuthors={setAuthor}/>}
        </div>
    );
}

export default Main;