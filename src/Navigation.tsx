import { Button } from "./components/ui/button"

function Navigation() {
  return (
    
    <div className="flex-1 justify-between items-center py-0 bg-[#1A1B1E]  h-14 w-3/4 mx-auto rounded-full shadow-lg my-4 sticky z-10 opacity-80">
      <ul className="flex justify-between items-center space-x-4 py-2 px-4 font-light text-white">
        <p>logo</p>
        <li>Home</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <Button variant={"secondary"} size="sm">Log in</Button>
        </ul>
    </div>
  )
}

export default Navigation