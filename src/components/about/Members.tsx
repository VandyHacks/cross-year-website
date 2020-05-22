import React from "react"
import member from "./members.json"

// enum Classification {Freshman = "Freshman", Sophomore = "Sophomore", Junior = "Junior", Senior = "Senior"};
// enum Committee {Dev = "Dev", Content = "Content", Sponsorship = "Sponsorship"};

function randomizeMembers(array: object[]): object[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//random array Object
let randomArray: object[];
randomArray = randomizeMembers(member);

//randomizing through array
const Members = () => (
    <div>
        <h2>List of Members</h2>
        <p>
            {randomArray.map((value, index) => {
                return (
                <p key={index}>
                    <h3>{value.name}</h3>
                    <li>Year: {value.classification}</li>
                    <li>Committee: {value.committee}</li></p>
                )
            })}
        </p>
    </div>
)

export default Members;