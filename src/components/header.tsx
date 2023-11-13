import Navbar from './navbar';

function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 w-full translate-y-[var(--top-offset)] bg-primary/50 shadow-2xl'>
      <div className='navbar-blur' />
      <Navbar />
    </header>
  );
}

export default Header;
