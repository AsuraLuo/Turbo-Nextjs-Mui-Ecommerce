import { builder, BuilderComponent } from '@builder.io/react'

const BasePageBuilder = () => {
  builder.init('fbac19b9f39149cfa351e4d6c86e2fdb')

  return (
    <div>
      <BuilderComponent model="page" url="/about-us" />
    </div>
  )
}

export default BasePageBuilder
