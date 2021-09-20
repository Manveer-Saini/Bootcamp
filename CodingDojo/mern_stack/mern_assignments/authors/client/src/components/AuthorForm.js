import React, {useState} from 'react';


const AuthorForm = (props) => {
    const {author, setAuthor, onSubmitProp, errors} = props;

    // Applies the input for each field in author object.
    const inputBuilder = (e) => {
        let newAuthorObject = {...author};
        newAuthorObject[e.target.name] = e.target.value;
        setAuthor(newAuthorObject);
    }

    return (
        <form onSubmit={onSubmitProp}>
            <div>
                <label htmlFor="name">Name</label>
                <input type='text' value={author.name} name="name" onChange={inputBuilder}/>
                {
                    errors.name ?
                    <span style={{color:"red"}}>{errors.name.message}</span>
                    : null
                }
            </div>

            <input type='submit'/>
        </form>
    );
}

export default AuthorForm;