
const Background = ({children}) => {
  return (
    <div className="flex justify-center h-screen w-screen bg-gradient-to-r from-indigo-400 to-indigo-600">
        <div className="pt-16">
            <h1 className=" flex justify-center items-center font-semibold text-5xl text-slate-50 ">
              Contact Us
            </h1>
        <div className="pt-5 flex justify-center items-center">
           <h2 className="text-xl text-slate-200 font-medium">Get in touch effortlessly. Your inquiries, our priority. Reach out and let's connect.</h2>
        </div>

        <div>
          {children}
        </div>
     </div>   
    </div>
  )
}

export default Background
