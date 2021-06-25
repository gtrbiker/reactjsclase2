import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>

    <Button animated='vertical'>
      <Button.Content hidden>Carrito</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

  </div>
)

export default ButtonExampleAnimated
