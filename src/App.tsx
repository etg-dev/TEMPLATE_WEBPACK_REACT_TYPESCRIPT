import React from 'react'

const App = () => {
  const url = process.env.BASE_URL

  return (
    <div>
      <a href={url}>erfanT.dev</a>
    </div>
  )
}

export default App
