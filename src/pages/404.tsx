import React from "react"

import PageLinks from "../components/PageLinks"

const NotFoundPage: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => (
  <div>
    <h1>Page Not Found</h1>
    <h2>Error Page</h2>
    <PageLinks />
  </div>
)

export default NotFoundPage
