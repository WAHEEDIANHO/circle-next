import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link href="/">Home</Link>
      </li>
      <li className="">
        <Link href="#about">About</Link>
      </li>  

      <li className="">
        <Link href="#howitwork" onClick={() => setMobileToggle(false)}>
        How It Work
        </Link>
      </li> 
      
      <li className="">
        <Link href="#faq" onClick={() => setMobileToggle(false)}>
          Faq
        </Link>

      </li>      
      <li className="">
        <Link href="#download" onClick={() => setMobileToggle(false)}>
          Download
        </Link>
      </li>
      <li>
        <Link href="#contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
