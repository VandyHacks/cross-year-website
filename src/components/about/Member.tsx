import React from "react"
import member from "./members.json"

interface MemberCheck {
    name:string;
    classification:string;
    committee:string;
}

function randomizeMembers(array: MemberCheck[]): MemberCheck[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//random array Object
let randomArray: MemberCheck[] = randomizeMembers(member);


const Members: React.FC<MembersProps> = (props: MembersProps) => (
    <div>
    <h2>List of Members</h2>
    {randomArray.map(value => {
            return (
            <div>
                <h3>{value.name}</h3>
                <li>Year: {value.classification}</li>
                <li>Committee: {value.committee}</li></div>
            )
    })}
    </div>
)

export default Members;
