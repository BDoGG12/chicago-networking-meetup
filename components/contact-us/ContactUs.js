
export default function ContactUs() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We'd love to hear from you! Reach out to us using the information below.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Email</h2>
      <p>
        You can email us at{" "}
        <a
          href="mailto:ben@uxbrite.com"
          className="text-blue-600 hover:underline"
        >
          ben@uxbrite.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Phone</h2>
      <p>
        Call us at <span className="font-medium">(123) 456-7890</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Address</h2>
      <p>
        123 Meetup Street, Suite 456
        <br />
        Chicago, IL 60601
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Social Media</h2>
      <p>
        Follow us on{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Twitter
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Facebook
        </a>{" "}
        for updates.
      </p>

      <p className="mt-6">We look forward to connecting with you!</p>
    </div>
  );
}
