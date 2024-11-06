import React from 'react'
import Badge from '../Badge'
import Image from './Image'
import slaider_one from '../assets/slaider_one.png'
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import Flex from '../Flex';
import Heading from './Heading';

const Product = () => {
  return (
  <>
  <Badge badgeName={'New'} className={'absolute top-4 left-5'}/>
 <Image imgSrc={slaider_one}/>
 <div className='bg-white p-5 invisible group-hover:visible absolute w-full bottom-16 left-0'>
    <Flex className={'justify-end gap-x-3 items-center'}>       
    Add to Wish List <FaHeart />
    </Flex>

    <Flex className={'justify-end gap-x-3 items-center'}>       
    Compare <BiGitCompare />
    </Flex>

    <Flex className={'justify-end gap-x-3 items-center'}>       
    Add to Cart <FaShoppingCart />
    </Flex>
 </div>
 <Flex className={'justify-between pt-5'}>
    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-DM font-bold text-[20px]'}/>
    <Heading as={'p'} text={'$44.00'} className={'font-DM text-[16px] text-menuColor'}/>
 </Flex>
 <Heading as={'p'} text={'Black'} className={'font-DM text-[16px] text-menuColor pt-2'}/>
  </>
  )
}

export default Product
