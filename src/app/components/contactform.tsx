const ContactForm: React.FC = () => {
    return (
      <form
        action="mailto:info@worldpremiereartists.com,chase@worldpremiereartists.com"
        method="post"
        encType="text/plain"
        className="max-w-lg mx-auto space-y-4 p-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="parentPhone"
          placeholder="Parent's Phone Number"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Tell us something amazing about you!"
          required
          className="w-full px-4 py-2 border rounded h-24"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[rgb(219,13,13)] text-white font-medium rounded transition"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  