import {NavBar} from '../components/NavBar'
import { Row } from '@/components/Row' 
export  function Soneto() {
  return (
    <section className='bg-teal-950 py-4 px-10 h-screen'>
        <NavBar/>
        <div className='mt-10 h-[80vh] justify-center flex tems-center flex-col space-y-5 '>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            
        </div>
    </section>
  )
}
