import React, { createContext, useState, useEffect } from 'react'

// create context
export const GlobalContext = createContext()

// 模擬API傳入的公告資料
const announceList = [
  {
    id: 1,
    title: 'CT Wallet APP Launch Announcement',
    author: '',
    content:
      'We are excited to announce that the CT Wallet APP will officially launch on August 1, 2024. CT Wallet will provide users with a secure and convenient service for managing and transacting multiple mainstream cryptocurrencies. Key features include:\n\n- Multi-currency support: including BTC, ETH, BSC, RTX, and more.\n- Instant transactions: Fast buying and selling of cryptocurrencies with multiple payment options.\n- Advanced security: Utilizing cutting-edge encryption technology to ensure user funds are safe.\n- User-friendly interface: Simple and intuitive operation for all users.\n\nStay tuned for the official launch of the CT Wallet APP, and thank you for your support!',
    date: 'Aug 1, 2024',
    open: false,
    type: 'all',
    tags: ['CT Wallet', 'Launch'],
    img: 'https://api.obit-app.com/image_0001.jpg',
  },
  {
    id: 2,
    title: 'ETH Wallet Feature Update',
    author: '',
    content:
      'We are pleased to inform you that the ETH wallet feature in CT Wallet will undergo a major update on September 1, 2024. This update will bring the following improvements:\n\n- Faster transaction processing: Optimized transaction flow to significantly improve transaction speed.\n- Lower fees: Reduced transaction fees to lower user costs.\n- Enhanced security: Introduction of multi-signature technology and smart contracts to ensure fund security.\n- New features: Support for more DApp interactions to enhance user experience.\n\nStay tuned for our latest updates, and thank you for your support and trust in CT Wallet!',
    date: 'Sep 1, 2024',
    open: false,
    type: 'news',
    tags: ['ETH', 'Wallet Update'],
    img: 'https://api.obit-app.com/image_0002.jpg',
  },
  {
    id: 3,
    title: 'BSC Wallet Feature Update',
    author: '',
    content:
      'We are honored to announce that the BSC wallet feature in CT Wallet will be updated on October 1, 2024. This update will enhance user experience and add more practical features, including:\n\n- New currency support: Expanded support for more cryptocurrencies on the BSC chain.\n- Improved transaction speed: Optimized BSC chain transaction processing to reduce confirmation time.\n- Enhanced security: Adoption of advanced security technologies to further protect user assets.\n- User-friendly interface: Improved user interface design for easier and more intuitive operations.\n\nPlease stay tuned for our updates, and thank you for your support and trust in CT Wallet!',
    date: 'Oct 1, 2024',
    open: false,
    type: 'news',
    tags: ['BSC', 'Wallet Update'],
    img: 'https://api.obit-app.com/image_0003.jpg',
  },
  {
    id: 4,
    title: 'BTC Wallet Feature Update',
    author: '',
    content:
      'We are pleased to inform you that the BTC wallet feature in CT Wallet will be updated on November 1, 2024. The new features will include the following improvements:\n\n- Higher transaction efficiency: Optimized BTC chain transaction flow to significantly improve efficiency.\n- Enhanced privacy protection: Introduction of privacy protection technologies to ensure the security of user transaction information.\n- New features: Support for Lightning Network transactions to facilitate small payments.\n- Improved user experience: Enhanced user interface design for a better operational experience.\n\nStay tuned for our latest updates, and thank you for your support of CT Wallet!',
    date: 'Nov 1, 2024',
    open: false,
    type: 'news',
    tags: ['BTC', 'Wallet Update'],
    img: 'https://api.obit-app.com/image_0001.jpg',
  },
  {
    id: 5,
    title: 'RTX Wallet Feature Update',
    author: '',
    content:
      'We are excited to announce that the RTX wallet feature in CT Wallet will undergo a major update on December 1, 2024. This update will greatly enhance the following aspects:\n\n- Faster transaction speed: Optimized RTX chain transaction processing to significantly improve speed.\n- Lower fees: Reduced transaction fees to lower user costs.\n- Enhanced security: Introduction of multi-signature technology and smart contracts to ensure fund security.\n- New features: Support for more DApp interactions on the RTX chain to enhance user experience.\n\nPlease stay tuned for our latest announcements, and thank you for your support of CT Wallet!',
    date: 'Dec 1, 2024',
    open: false,
    type: 'all',
    tags: ['RTX', 'Wallet Update'],
    img: 'https://api.obit-app.com/image_0002.jpg',
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
