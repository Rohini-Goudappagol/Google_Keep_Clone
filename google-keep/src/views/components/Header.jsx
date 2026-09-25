import '../../styles/header.css'
const Header = () =>{
  return (
    <div className="headerParentComponent">
        <div className="menuBarIconContaioner">
            <i class="fa-solid fa-bars"></i>
        </div>
        <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="Image" width={44} height={40}/>
        <span className='applicationTitleText'>Keep</span>
    </div>
  )
}

export default Header