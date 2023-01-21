export default function Navbar() {
  return (
    <div
      className='navbar fixed top-0 z-[200] bg-primary/80 text-accent
    shadow-xl'
    >
      <div className='flex-1'>
        <button className='btn-ghost btn-square btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex-none'>
        <a className='btn-ghost btn text-xl normal-case'>daisyUI</a>
      </div>
    </div>
  );
}
