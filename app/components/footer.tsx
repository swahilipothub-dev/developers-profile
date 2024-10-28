import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p>Email: <a href="mailto:mailto@example.com" className="underline">partnership@swahilipothub.co.ke</a></p>
          <p>Phone: +254(0)114635505</p>
          <p>Location: Mombasa, Kenya</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-3">
          <a href="https://www.linkedin.com/company/swahilipot-hub/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={30} />
          </a>
            <a href="https://www.instagram.com/swahilipothub/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/swahilipothub-dev" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={30} />
            </a>
            <a href="https://x.com/swahilipothube" target="_blank" rel="noopener noreferrer" title="X">
              <FaTwitter size={30} />
            </a>
            <a href="https://m.facebook.com/Swahilipothub/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p>© 2024 Swahilipot Hub Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}