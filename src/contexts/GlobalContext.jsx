import React, { createContext, useState, useEffect } from 'react'

// create context
export const GlobalContext = createContext()

// 模擬API傳入的公告資料
const announceList = [
  {
    id: 1,
    title: 'Introducing New Security Features and Enhancements',
    date: 'Jul 12, 2024',
    type: 'all',
  },
  {
    id: 2,
    title: 'Scheduled Maintenance on July 15, 2024',
    date: 'Jul 13, 2024',
    type: 'news',
  },
  {
    id: 3,
    title: 'Upgrade Your Wallet for Improved Performance',
    date: 'Jul 14, 2024',
    type: 'all',
  },
  {
    id: 4,
    title: 'Important Notice: Phishing Alert',
    date: 'Jul 15, 2024',
    type: 'important',
  },
  {
    id: 5,
    title: 'New Partnership with Blockchain Innovations Ltd.',
    date: 'Jul 16, 2024',
    type: 'news',
  },
  {
    id: 6,
    title: 'Enhanced User Interface Coming Soon',
    date: 'Jul 17, 2024',
    type: 'all',
  },
  {
    id: 7,
    title: 'Upcoming Webinar: Understanding Blockchain Technology',
    date: 'Jul 18, 2024',
    type: 'news',
  },
]

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState()
  useEffect(() => {
    setData(announceList)
    console.log('get data from API')
  }, [])
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider
