import React, {useState} from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [theAge, setAge] = useState(age);

    const increaseAge = () => {
        setAge(theAge + 1);
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {theAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday button for {firstName} {lastName}</button>
        </div>

    )
}

export default PersonCard;