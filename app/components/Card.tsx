import React from 'react'

type CardProps = {
    userId:number,
    id:number,
    title:string,
    body:string
}

const Card = (props:CardProps) => {
    var title = props.title
  return (
    <div>
        <div style={{border:"2px solid red"}}>  {title} </div> <br/>
        <div style={{border:"2px solid blue"}}>  {props.body} </div>
    </div>
  )
}

export default Card
