import React from 'react'
import { Card, Image } from 'semantic-ui-react'
/* import img1 from './cheesecake.jpg' */

const CardComponent = (props) => (
  <Card>
    <Image src={props.img} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>

  </Card>
)

export default CardComponent
