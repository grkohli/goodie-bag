import React from 'react'

const SingleCandy = (props) => {
    const candy = props.candy;
    return (
        <div>
            <h1>{candy.name}</h1>
            <h2>{candy.description}</h2>
            <img src={`${candy.imageUrl}`} />
        </div>
    )
}

export default SingleCandy;
