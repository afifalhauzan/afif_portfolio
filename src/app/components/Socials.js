import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing the social icons

export default function Socials() {
  return (
    <div>
      {/* Social Media Icons */}
      <div className="flex space-x-8 pt-8">
        <a href="https://instagram.com/afifalhauzan._" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-gray-800 dark:text-bluetextdefault hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/afiif-al-hauzaan-alfian/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-gray-800 dark:text-bluetextdefault hover:text-blue-700" />
        </a>
        <a href="https://github.com/afifalhauzan" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-gray-800 dark:text-bluetextdefault hover:text-gray-600" />
        </a>
      </div>
    </div>
  );
}
