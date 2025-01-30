import React, {useState} from "react";
const Navbar = () => {
    const[bClass, setbClass] = useState ("burger-bar unclicked")
    const[mClass, setmClass]= useState("menu hidden")
    
    
     const [isMenuOpen, setIsMenuOpen] = useState(false);
   // eslint-disable-next-line
      const updateMenu = ()=> 
      {  setIsMenuOpen(!isMenuOpen);
        if(!isMenuOpen) {
          setbClass("burger-bar clicked")
          setmClass ("menu visible")
        }
      else{
        setbClass("burger-bar unclicked")
        setmClass("menu hidden")
      }
      return (
        <div>
          <nav>
          <div className="burger-menu"  onClick={updateMenu}>
          <div className={bClass} >Home</div>
              <div className={bClass} >Menu</div>
              <div className={bClass} >Contact</div>
            </div>
          </nav>
          <div className={mClass}></div>
          </div>
        )
        } ;
    }
    export default Navbar;