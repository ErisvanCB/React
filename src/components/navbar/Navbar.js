import './Navbar.css'
function Navbar({item0, item1, item2, item3, item4}){
    return(
        <div className='navbar'>

            <div class="nome">
                {/* nome */}
                {item0}
            </div>

            <div class="navbar-content">
                <div class="navbar-content-children">
                    {/* projeto */}
                    {item1}
                </div>

                <div class="navbar-content-children">
                    {/* experiência */}
                    {item2}
                </div>

                <div class="navbar-content-children">
                    {/* contato */}
                    {item3}
                </div>

                <div class="navbar-content-children">
                    {/* sobre mim */}
                    {item4}
                </div>
            </div>
        </div>
    )
}

export default Navbar;