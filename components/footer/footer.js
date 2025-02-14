export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Chicago Networking Meetup Inc. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="/privacy" className="hover:underline text-gray-300 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline text-gray-300 hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline text-gray-300 hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
  