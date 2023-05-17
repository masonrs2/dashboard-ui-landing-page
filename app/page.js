import Image from 'next/image'
import logo from '../constants/assets/images/logo.jpeg' 
import pfp from '../constants/assets/images/pfp.jpg'
import { RiPieChart2Fill, RiBarChartBoxFill } from 'react-icons/ri'
import { TbArrowsTransferUp } from 'react-icons/tb' 
import { BsFillDoorOpenFill, BsFillTicketPerforatedFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import { IoWallet } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import { GiPopcorn } from 'react-icons/gi'
import background from '../constants/assets/images/background.jpeg'
import mastercard from '../constants/assets/images/mastercard.png'
import greenLine from '../constants/assets/images/greenLine.png'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-200  " >
      <Image src={background} className="w-full h-20 object-cover " />
      <div className="grid grid-cols-3 lg:grid-cols-8 " >
        <div className="col-span-1 lg:col-span-2 bg-white rounded-md flex flex-col mx-4 mr-6 mt-6 shadow-lg " >
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

          <div className="flex flex-col mt-10 lg:mt-9 justify-center items-center">
            <h1 className="text-black text-2xl lg:text-3xl">$52,491</h1>
            <h4 className="text-gray-500 text-sm ">Monthly budget</h4>
          </div>

          <div className="justify-center items-baseline flex mt-20" >
            <ul className="text-black text-sm font-semibold space-y-7 items-start flex flex-col lg:space-y-6 lg:text-base " >
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

        <div className="col-span-1 lg:col-span-3 flex flex-col lg:mx-10 w-60 md:w-[270px] lg:w-[330px] " >
          <h1 className="text-2xl text-black font-light mt-10 " >Dashboard</h1>
          <div className="bg-white h-48 rounded-md shadow-lg mt-6 " >
            <div className="flex flex-col mt-5 ml-4" >
              <div className="flex justify-between">
                <h4 className="text-gray-500 text-sm  ">Available Balance</h4>
              </div>
                <h1 className="lg:text-4xl mt-6 text-black text-4xl " >$ 21,736</h1>
                <div className="justify-between flex " >
                  <h4 className="text-gray-500 mt-12 flex justify-start " >*** <span className="ml-1 text-sm lg:text-base">4532</span></h4>
                  <Image src={mastercard} className="w-14 h-10 mt-8 " />
                </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 " >
            <h4 className="text-gray-500 text-xs md:text-sm" >Interest Payment Limit</h4>
            <h4 className="text-gray-500 text-xs md:text-sm font-medium " >$1,200/3,000</h4>
          </div>

          <div className="h-2 w-full rounded-full bg-gray-300 mt-3" >
            <div className="h-2 w-2/3 rounded-full bg-black" ></div>
          </div>

          <div className="flex gap-2 md:gap-3 lg:gap-4" >
            <div className="flex outline outline-1 outline-gray-400 rounded-md py-2 px-3 items-center justify-center gap-2 mt-8 " >
              <Image className="w-10 h-9 md:w-16 md:h-10" src={greenLine} />
              <div className="flex flex-col gap-1" >
                <h4 className="text-gray-500 text-xs lg:text-sm" >Income</h4>
                <h4 className="text-black font-medium md:text-sm lg:text-base text-sm" >$6,200</h4>
              </div>
            </div>

            <div className="flex bg-white rounded-md shadow-md py-2 px-3 items-center justify-center gap-2 mt-8 " >
              <Image className="w-10 h-9 md:w-16 md:h-10" src={greenLine} />
                <div className="flex flex-col gap-1" >
                  <h4 className="text-gray-500 text-xs lg:text-sm" >Spendings</h4>
                  <h4 className="text-black font-medium md:text-sm lg:text-base text-sm" >$3,251</h4>
                </div>
            </div>

          </div>

          <div className="flex justify-between mt-8 items-center ">
              <h3 className="text-black font-medium text-sm md:text-base " >Latest Spendings</h3>
              <h4 className="text-gray-500 text-xs md:text-sm" >View All</h4>
          </div>
            <hr
            className='mt-4 opacity-20'
            style={{
              background: "#A6A6A6",
              height: "2px",
              border: "none",
            }}
          />

          <div className="flex flex-col gap-4 mt-4" >
            <div className="flex cursor-pointer hover:bg-gray-400/30 rounded-md">
              <div className="bg-white shadow-lg h-9 w-10 rounded-md flex justify-center items-center" >
                <FaShoppingCart size={20} className="text-black" />
              </div>

              <div className="flex flex-col ml-3 " >
                <h4 className="text-black text-sm">Online Store</h4>
                <h5 className="text-xs text-gray-500 mt-[2px]" >May 23, 2023 at 7:15 PM</h5>
              </div>

              <div className="flex h-full justify-between items-center ml-14 lg:ml-10 ">
                <h4 className="text-sm text-black ml-4 lg:flex hidden " >-$32.50</h4>
                <IoIosArrowForward size={18} className="text-gray-500 lg:ml-2" />
              </div>                     
            </div>

            <div className="flex cursor-pointer hover:bg-gray-400/30 rounded-md">
              <div className="bg-white shadow-lg h-9 w-10 rounded-md flex justify-center items-center" >
                <AiFillHome size={20} className="text-black" />
              </div>

              <div className="flex flex-col ml-3 " >
                <h4 className="text-black text-sm">House Keeping</h4>
                <h5 className="text-xs text-gray-500 mt-[2px]" >May 23, 2023 at 7:15 PM</h5>
              </div>

              <div className="flex h-full justify-between items-center ml-14 lg:ml-10 ">
                <h4 className="text-sm text-black ml-4 lg:flex hidden " >-$44.90</h4>
                <IoIosArrowForward size={18} className="text-gray-500 lg:ml-2" />
              </div>                     
            </div>

            <div className="flex cursor-pointer hover:bg-gray-400/30 rounded-md">
              <div className="bg-white shadow-lg h-9 w-10 rounded-md flex justify-center items-center" >
                <BsFillTicketPerforatedFill size={20} className="text-black" />
              </div>

              <div className="flex flex-col ml-3 " >
                <h4 className="text-black text-sm">Tickets</h4>
                <h5 className="text-xs text-gray-500 mt-[2px]" >May 23, 2023 at 7:15 PM</h5>
              </div>

              <div className="flex h-full justify-between items-center ml-14 lg:ml-10 ">
                <h4 className="text-sm text-black ml-4 lg:flex hidden " >-$55.20</h4>
                <IoIosArrowForward size={18} className="text-gray-500 lg:ml-2" />
              </div>                     
            </div>

            <div className="flex cursor-pointer hover:bg-gray-400/30 rounded-md ">
              <div className="bg-white shadow-lg h-9 w-10 rounded-md flex justify-center items-center" >
                <GiPopcorn size={20} className="text-black" />
              </div>

              <div className="flex flex-col ml-3 " >
                <h4 className="text-black text-sm">Popcorn</h4>
                <h5 className="text-xs text-gray-500 mt-[2px]" >May 23, 2023 at 7:15 PM</h5>
              </div>

              <div className="flex h-full justify-between items-center ml-14 lg:ml-10 ">
                <h4 className="text-sm text-black ml-4 lg:flex hidden " >-$10.25</h4>
                <IoIosArrowForward size={18} className="text-gray-500 lg:ml-2" />
              </div>                     
            </div>

          </div>
        </div>
        
        <div className="col-span-1 lg:col-span-3" >

        </div>
      </div>
    </div>
  )
}
