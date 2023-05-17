import Image from 'next/image'
import logo from '../constants/assets/images/logo.jpeg' 
import pfp from '../constants/assets/images/pfp.jpg'
import { RiPieChart2Fill, RiBarChartBoxFill } from 'react-icons/ri'
import { TbArrowsTransferUp } from 'react-icons/tb' 
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { IoWallet } from 'react-icons/io5'
import background from '../constants/assets/images/background.jpeg'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-200  " >
      <Image src={background} className="w-full h-20 object-cover" />
      <div className="grid grid-cols-3" >
        <div className="col-span-1  bg-white rounded-md flex flex-col mx-4 md:mx-8 xl:mx-12 xl:mr-20 mt-6  shadow-lg " >
          <div className="flex justify-center items-center gap-2 mt-5 " >
            <Image width={37} src={logo} alt="logo" className="rounded-full" />
            <h1 className="text-black font-bold text-lg ">Zence</h1>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center" >
            <Image 
              src={pfp} 
              alt="profile-pic" 
              className="rounded-full w-20 h-20 object-cover" 
            />
            <h4 className=" text-gray-500 mt-2 text-sm font-medium " >Welcome back,</h4>
            <h4 className="text-black font-semibold " >Jane Doe</h4>
          </div>

          <div className="flex flex-col mt-10 justify-center items-center">
            <h1 className="text-black text-2xl">$52,491</h1>
            <h4 className="text-gray-500 text-sm ">Monthly budget</h4>
          </div>

          <div className="justify-center items-baseline flex mt-20" >
            <ul className="text-black text-sm font-semibold space-y-7 items-start flex flex-col  " >
              <li className=" flex justify-center items-center gap-3 ">
                <RiPieChart2Fill size={20} />
                Dashboard
              </li>

              <li className=" flex justify-center items-center gap-3 text-gray-500">
                <RiBarChartBoxFill size={20} />
                Investments
              </li>

              <li className=" flex justify-center items-center gap-3 text-gray-500">
                <TbArrowsTransferUp size={20} className="font-bold" />
                Transactions
              </li>
              <li className=" flex justify-center text-gray-500 items-center gap-3">
                <IoWallet size={20} />
                Wallet
              </li>
              <li className=" flex justify-center items-center gap-3 pt-20 pb-8 text-gray-500">
                <BsFillDoorOpenFill size={20} className="" />
                Sign Out
              </li>
            </ul>
          </div>

        </div>
        <div className="col-span-1 bg-blue-300" >

        </div>
        <div className="col-span-1 bg-blue-600" >

        </div>
      </div>
    </div>
  )
}
