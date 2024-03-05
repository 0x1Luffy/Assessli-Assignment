
import { useState } from "react";
import { schema } from "./Validation";
import Socials from "./Socials";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const validationResult = schema.safeParse(formData);
    
      if (validationResult.success) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzf98KC6azHAr3q17Fo1SGXaPLzltZT31RRsm3rE0IL59S_4GTU0_fdIu1LW_xfUM8/exec';
        const form = document.forms['submit-to-google-sheet'];
        alert('Data received successfully');
          await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
         
        }
  };

  return (
    <div className="w-[1280px] h-[650px] mt-5 bg-slate-100">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-8 bg-slate-100">
          <div>
            <h1 className="pt-20 pl-14 text-blue-500 font-semibold text-4xl">Send us a Message</h1>
          </div>
          <form onSubmit={handleSubmit} name="submit-to-google-sheet">
            <div className="flex gap-2 pt-5 justify-evenly flex-wrap">
              <input type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} name="firstName" className="mt-2 p-2 border border-gray-300 rounded-md block w-2/5" />
              <input type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} name="lastName" className="mt-2 p-2 border border-gray-300 rounded-md block w-2/5" />
              <input type="email" placeholder="Email" value={formData.email} onChange={handleChange} name="email" className="mt-2 p-2 border border-gray-300 rounded-md block w-2/5" />
              <input type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} name="phone" className="mt-2 p-2 border border-gray-300 rounded-md block w-2/5" />
              <input type="text" value={formData.message} onChange={handleChange} name="message" className="mt-2 p-2 border border-gray-300 rounded-md block h-48 w-10/12" />
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Send Message</button>
            </div>
          </form>
        </div>
        <div className="col-span-4 bg-gradient-to-r from-green-300 to-green-400">
          <div>
            <h1 className="pt-20 pl-14 text-slate-100 font-semibold text-4xl">Info</h1>
          </div>
          <div className="px-5 pt-5 pl-14">
            <p className="whitespace-pre-line break-words leading-10 text-slate-100 font-semibold">330, KC Dutta road Near Ovoy Ashram, Chakdaha, West Bengal, 741222
              Manjunatha layout, Near pragati High school, Munnekollal, Marathahalli,
              Bengaluru, Karnataka, 560037
            </p>
          </div>
          <div className="">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
