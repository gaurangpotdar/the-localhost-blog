import { useStaticQuery } from 'gatsby'
import React from 'react'

export default  () => {
    const {title, description} = useStaticQuery()
    return(
    <>
        <h1>{title}</h1>
        <p>
            {description}
        </p>
    </>
    )
}