
import './App.css'
import Image from './components/Image'
import Logo from "../src/assets/Logo.png"
import Container from './Container'
import Flex from './Flex'
import Menu from './Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart,FaCarSide,FaUndoAlt  } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from './components/Heading'
import Banner from "../src/assets/banner.png"


function App() {


  return (
    <>
    {/* Menu Part Start  */}
   <div className="py-7 bg-white">
    <Container>
      <Flex>
        <div className="w-logoW">
        <Image imgSrc={Logo}/>
        </div>
      <div className="w-menuW">
    <Flex className={'gap-x-6'}>
      <Menu menuName={'Home'}/>
      <Menu menuName={'Shop'}/>
      <Menu menuName={'About'}/>
      <Menu menuName={'Contacts'}/>
      <Menu menuName={'Journal'}/>
    </Flex>
      </div>
      </Flex>
    </Container>
   </div>
   {/* Menu Part End */}
   {/* Rectangle Part Start  */}
   <div className={"w-full bg-RectangleColor py-6 border border-menuColorH"}>
    <Container>
      <Flex className={'items-center'}>
        <div className="w-rectangleW">
          <Flex className={'gap-x-3'}>
          <HiBars3BottomLeft className={'text-2xl'}/>
          <Heading as={'h3'} text={'Shop by Category'} className={'font-DM text-[14px]'}/>
          </Flex>
        </div>
        <div className="w-searchW relative">
          <input type="text" className={'p-5 bg-white w-searchberW'} placeholder='Search Products' />
          <FaSearch className={'absolute right-[214px] bottom-[25px]'}/>
        </div>
        <div className="w-rectangleW">
        <Flex className={'gap-x-8'}>
          <div className="">
            <Flex className={'gap-x-2'}>
            <FaUser />
            <FaCaretDown />
            </Flex>
          </div>
       
        <FaShoppingCart />
        </Flex>
        </div>
      </Flex>
    </Container>
   </div>
   {/* Rectangle Part End */}

   {/* Banner Part Start  */}
<div className=" ">
<Image imgSrc={Banner}/>
</div>
   {/* Banner Part End */}

   {/* Information Part Start  */}
   <div className="py-7 ">
    <Container>
      <Flex className={'justify-between'}>
        <div className="w-logoW items-center ">
          <Flex className={'gap-x-3'}>
          <PiNumberTwoBold className={'text-[30px]'}/>
          <Heading as={'h4'} text={'Two years warranty'} className={'font-DM text-[20px] text-informationColor'}/>
          </Flex>
        </div>
        <div className="w-logoW items-center">
          <Flex className={'gap-x-4'}>
          <FaCarSide className={'text-[30px]'}/>
          <Heading as={'h4'} text={'Free shipping'} className={'font-DM text-[20px] text-informationColor'}/>
          </Flex>
        </div>
        <div className="w-logoW items-center">
          <Flex className={'gap-x-4'}>
          <FaUndoAlt className={'text-[30px]'}/>
          <Heading as={'h4'} text={'Return policy in 30 days'} className={'font-DM text-[20px] text-informationColor'}/>
          </Flex>
        </div>
      </Flex>
    </Container>
   </div>
   {/* Information Part End */}
    </>
  )
}

export default App
