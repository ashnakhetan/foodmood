import React, { useState } from "react";

const List = (props) => {
    const mostMatched = props.data[0];
    const allLabels = props.data.map((elem) => elem.label);
    const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));

    const [listStyle, setListStyle] = useState("line-through");

    const handleStrike = () => {
        setListStyle('line-through');
    }
    // const messages = {
    //     introduction: "Citrus foods such as oranges help you feel less stressed throughout your day!",
    //     Banana: "Did you know that Bananas are capable of enhancing your mood! The vitamins in bananas help make you happier everytime you eat one!",
    //     Avocado: "The vitamins in Avocado help prevent you from feeling uneasiness, worry, and fear.",
    //     // Leafy Green: "One serving of leafy greens a day can help your brain stay fresh an active for longer periods of time.",
    //     Orange: "Citrus foods such as oranges help you feel less stressed throughout your day!",
    //     conclusion: "Find your parent and take a picture of them. Congrats on learning more about mood affecting food!"
    // }
    return (
        <>
            <ul className="food">
                <p>Go look for these items and hold them up in front of the camera!</p>
                {sortedLabels.map((label) => (
                    <li key={label}>
                        <span>
                            <div key={(label === mostMatched.label ? (mostMatched.confidence >= 0.7 ? label : null) : null)}>
                            </div>
                            {/* <button onClick={handleStrike()} >Click to remove current fruit from list!</button> */}
                            <p className="name">{label}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;