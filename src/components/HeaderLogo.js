import logo from '../images/logo.jpg'

const headerStyle = {
  position: 'absolute',
  top: 20,
  left: 30,
};

function HeaderLogo() {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="" width={140} height={60} />
    </header>
  );
}

export default HeaderLogo;