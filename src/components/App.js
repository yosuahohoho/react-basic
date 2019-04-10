import React from 'react'

import avatar from './../avataaars.png'

function App() {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <h1>Hello React!</h1>
      </section>
    </main>
  )
}

export default App