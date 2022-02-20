import React from "react";

const Food = (props) => {
    const mostMatched = props.data[0];
    console.log(mostMatched);
    const allLabels = props.data.map((elem) => elem.label);
    const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
    const messages = {
        introduction: "Citrus foods such as oranges help you feel less stressed throughout your day!",
        Banana: "Did you know that Bananas are capable of enhancing your mood! The vitamins in bananas help make you happier everytime you eat one!",
        Avocado: "The vitamins in Avocado help prevent you from feeling uneasiness, worry, and fear.",
        // Leafy Green: "One serving of leafy greens a day can help your brain stay fresh an active for longer periods of time.",
        Orange: "Citrus foods such as oranges help you feel less stressed throughout your day!",
        conclusion: "Find your parent and take a picture of them. Congrats on learning more about mood affecting food!"
    }
    console.log(messages['Banana']);
    return (
        <>
            <ul className="food">
                {sortedLabels.map((label) => (
                    <div key={(label === mostMatched.label ? (mostMatched.confidence >= 0.7 ? label : null) : null)}>
                        <p> {(label === mostMatched.label ? (mostMatched.confidence >= 0.7 ? label : null) : null)} </p>
                        <p> {(label === mostMatched.label ? (mostMatched.confidence >= 0.7 ? messages[label] : null) : null)} </p>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default Food;