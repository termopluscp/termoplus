
export  function NavBar() {
  return (
    <nav className="text-white  text-xl flex flex-row justify-between items-center ">

        <div className="flex items-center ">
        <h1 className="text-4xl font-bold">Termo+</h1>
       </div>

       <div className="space-x-8  flex font-normal text-xl">
            <h1 className="rounded-full border-[1px] border-indigo-100 px-2 h-9 items-center" >Soneto</h1>
            <h1 className=" rounded-full border-[1px] border-indigo-100 px-2 h-9 items-center">Dueto</h1>
            <h1 className=" rounded-full border-[1px] border-indigo-100 px-2 h-9">Quarteto</h1>
        </div>     

       
        
    </nav>
  )
}
