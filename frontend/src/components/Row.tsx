import { Slot } from "./Slot"
export  function Row() {
  return (
    <div className="flex flex-row items-center justify-center space-x-2">
        <Slot/>
        <Slot/>
        <Slot/>
        <Slot/>
        <Slot/>
    </div>
  )
}
