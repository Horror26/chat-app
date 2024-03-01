import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Feel free to chat with anyone" />
      <meta name="keywords" content="account,chat,have,login,mindful,register,sign"></meta>
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