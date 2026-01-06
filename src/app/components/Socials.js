import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing the social icons

export default function Socials() {
  return (
    <nav role="navigation" aria-label="Social media links">
      {/* Social Media Icons */}
      <div className="flex space-x-8 pt-8 transition-all duration-800 ease-in-out">
        <a 
          href="https://instagram.com/afifalhauzan._" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Afif's Instagram profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-md p-1 -m-1"
        >
          <FaInstagram className="text-xl text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200" />
        </a>
        <a 
          href="https://www.linkedin.com/in/afiif-al-hauzaan-alfian/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Afif's LinkedIn profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-md p-1 -m-1"
        >
          <FaLinkedin className="text-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" />
        </a>
        <a 
          href="https://github.com/afifalhauzan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Afif's GitHub profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-md p-1 -m-1"
        >
          <FaGithub className="text-xl text-slate-600 dark:text-slate-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  );
}
