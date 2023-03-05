import logo from '../images/logo.jpg'

const headerStyle = {
  position: 'absolute',
  top: 20,
  left: 30,
};
// This is a functional component that renders a header with a logo image.
function HeaderLogo() {
  return (
  // Render a <header> element with the style defined in the headerStyle object.
  // Inside the <header>, render an <img> element with the "logo" source,
  // and set the width and height of the image to 140 and 60 respectively.
    <header style={headerStyle}>
      <img src={logo} alt="" width={140} height={60} />
    </header>
  );
}

export default HeaderLogo;