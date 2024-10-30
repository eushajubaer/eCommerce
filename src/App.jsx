
import './App.css'
import Image from './components/Image'
import Logo from "../src/assets/Logo.png"
import Container from './Container'
import Flex from './Flex'
import Menu from './Menu'

function App() {


  return (
    <>
   <div className="py-7 bg-white">
    <Container>
      <Flex>
        <div className="w-1/3">
        <Image imgSrc={Logo}/>
        </div>
      <div className="w-1/2 mr-36">
      <Flex className={' gap-x-5'}>
        <Menu menuName={'Home'} className={'font-bold'}/>
        <Menu menuName={'Shop'}/>
        <Menu menuName={'About'}/>
        <Menu menuName={'Contacts'}/>
        <Menu menuName={'Journal'}/>
      </Flex>
      </div>
      </Flex>
    </Container>
   </div>
    </>
  )
}

export default App
