import logo from '../images/logo.jpg'

function HeaderLogo(){
    const styles = {
        width: 140, height: 60, position:'absolute', top: 20, left: 40
    }
    return(
        <header>
             <img src={logo}alt="" style={ styles } ></img>
    
        </header>
       
)}
export default HeaderLogo;