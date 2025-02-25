import { NavbarContainer, NavbarLink } from '../styles/NavbarStyles';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/explore">Explore</NavbarLink>
      <NavbarLink href="/upload">Upload</NavbarLink>
      <NavbarLink href="/leaderboard">Leaderboard</NavbarLink>
      <NavbarLink href="/profile">Profile</NavbarLink>
      <DarkModeToggle />
    </NavbarContainer>
  );
};

export default Navbar;
