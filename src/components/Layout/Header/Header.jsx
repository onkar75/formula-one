import './Header.css';
const Header = ({ startYear = 2005, endYear = 2022 }) => {
  return (
    <header>
      <h1>F1 World Champions</h1>
      <p className='season'>
        Season {startYear} - {endYear}
      </p>
    </header>
  );
};

export default Header;
