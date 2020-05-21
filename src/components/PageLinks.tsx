import React from "react"
import { Link } from "gatsby"

const PageLinks = () => (
    <div>
        <Link to="./">Go back to the homepage</Link><p></p>
        <Link to="./About">About Page</Link><p></p>
        <Link to="./Events">Events Page</Link><p></p>
        <Link to="./Join">Join Page</Link><p></p>
        <Link to="./Hackathons">Hackathons Page</Link><p></p>
    </div>
)

export default PageLinks;