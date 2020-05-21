import React from "react"
import { Link } from "gatsby"

enum Classification {Freshman = "Freshman", Sophomore = "Sophomore", Junior = "Junior", Senior = "Senior"};
enum Committee {Dev = "Dev", Content = "Content", Sponsorship = "Sponsorship"};

//some basic members to use
const Member1 = {
    name: 'Member 1',
    classification: Classification.Freshman,
    committee: Committee.Dev
};

const Member2 = {
    name: 'Member 2',
    classification: Classification.Sophomore,
    committee: Committee.Content
};

const Member3 = {
    name: 'Member 3',
    classification: Classification.Senior,
    committee: Committee.Sponsorship
};

function randomizeMembers(array: object[]): object[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function traversal(item: object, index:number){
    <div>
        <var>item.name</var>
    </div>
}

//Member array object
let memberArray: object[];
memberArray = [Member1, Member2, Member3];
//random array Object
let randomArray: object[];
randomArray = randomizeMembers(memberArray);

//randomizing through array
const Members = () => (
    <div>
        <h2>Member</h2>
        <p>
            {randomArray.map((value, index) => {
                return (
                <p key={index}>
                    <h4>{value.name}</h4><li>{value.classification}</li>
                    <li>{value.committee}</li></p>
                )
            })}
        </p>
    </div>
)

export default Members;