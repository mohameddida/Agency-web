import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      username: formData.username,
      phone: formData.phone,
      subject: formData.subject,
      message: `the user ${formData.username} \n email : ${formData.email} \n  Phone number : ${formData.phone} \n  message :  ${formData.message}`,
      recipient_email: "goldendunesvoyages@gmail.com",
    };

    emailjs
      .send(
        "service_o3qvqcs",
        "template_gc51zs8",
        templateParams,
        "zBEdg0DdZOz9Kv3OO"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "bottom-center",
          });
          setFormData({
            email: "",
            username: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message. Please try again later.", {
            position: "bottom-center",
          });
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Comment pouvons-nous vous aider ?
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm md:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Adresse e-mail
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm md:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Entrez votre nom
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="phone"
                id="floating_phone"
                value={formData.phone}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm md:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Numéro de téléphone (+216-xx-xxx-xxx)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm md:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Sujet
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm md:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
