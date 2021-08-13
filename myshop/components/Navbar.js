import Link from 'next/link' 

const Navbar= ()=>{
    return(
        <>
         <nav>
    <div class="nav-wrapper #3f51b5 indigo">
     <Link href="#"><a class="brand-logo">Logo</a></Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link href="sass.html"><a >LogIn</a></Link></li>
        <Link href="badges.html"><li><a>SingUp</a></li></Link>
        <Link href="collapsible.html" ><li><a >Create New Account</a></li></Link>
      </ul>
    </div>
  </nav>
        </>

    )
}
export default Navbar;