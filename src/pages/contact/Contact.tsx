import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import SocialCompo from "../../components/SocialCompo";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    if (
      !formData.firstName ||
      !formData.companyName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_ID
      );
      console.log(response);
      if (response.status == 200) {
        setLoading(false);
        toast.success("Email Sent Successfully");
        setFormData({
          firstName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="  w-full flex  items-center justify-center">
      <div className="xl:w-[80%] sm:h-[85%] p-3   md:flex-row flex-col  rounded-2xl flex gap-10 ">
        <div className="flex-1 rounded-2xl flex-start  flex flex-col p-5 sm:p-9 justify-between bg-emerald-900 text-white">
          <h3 className="text-xl sm:text-3xl ">Contact Information</h3>
          <div className="flex  items-start  my-6 sm:mt-0 flex-col gap-3 sm:gap-8">
            <a className=" flex items-center gap-3 sm:gap-5" href="tel:+91">
              <MdWifiCalling3 className="text-xl sm:text-2xl" />{" "}
              <span>+919380583373</span>
            </a>
            <a className=" flex items-center gap-3 sm:gap-5" href="">
              <MdEmail className="text-xl sm:text-2xl" />{" "}
              <span>info@globethrough.com</span>
            </a>
            <a className=" flex items-center gap-3 sm:gap-5" href="">
              <IoLocationSharp className="text-xl sm:text-2xl" />{" "}
              <span>Garuda ,Bhive workspace Btm Layout ,Bengaluru</span>
            </a>
          </div>

          <SocialCompo bg="bg-white" icon_color="text-emerald-900" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:flex-[1.3]  flex-col gap-5  sm:gap-9"
        >
          <div className="">
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-9">
              <div className="flex flex-col  gap-1 sm:gap-2">
                <label htmlFor="">FirstName</label>
                <input
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="px-2  outline-none border-0 border-b-1 border-b-gray-500 "
                />
              </div>
              <div className="flex flex-col   gap-1 sm:gap-2">
                <label htmlFor="companyname">Company Name</label>
                <input
                  value={formData.companyName}
                  onChange={handleChange}
                  id="companyname"
                  type="text"
                  name="companyName"
                  className="px-2 outline-none border-0 border-b-1 border-b-gray-500"
                />
              </div>
              <div className="flex flex-col   gap-1 sm:gap-2">
                <label htmlFor="email">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="text"
                  className="px-2 w-full outline-none border-0 border-b-1 border-b-gray-500"
                />
              </div>
              <div className="flex flex-col  gap-1 sm:gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  id="phone"
                  type="text"
                  className="px-2 outline-none border-0 border-b-1 border-b-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col mt-9 gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="outline-none border-b-1  border-b-gray-500"
                name="message"
                rows={1}
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className=" flex mt-20  justify-end">
            <button
              disabled={loading}
              className=" p-2 sm:p-3 text-white bg-emerald-900 rounded-xl text-center text-[1rem] sm:text-xl cursor-pointer font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
