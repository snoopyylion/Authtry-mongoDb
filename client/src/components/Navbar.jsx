import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";


const Navbar = () => {
  // const {user} = useContext(UserContext);
  // console.log(user);
  const [name, setName] = useState('');
  console.log(name);

  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Navbar
