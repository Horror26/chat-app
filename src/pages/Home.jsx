import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Flee free to chat with anyone" />
    </Helmet>
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
  </div>
)
}

export default Home