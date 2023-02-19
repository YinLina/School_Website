import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function VolunteerPage() {
  return (
    <>
      <Navbar/>
      <div>
        <br /><br />
        <div>
          <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">
            Volunteer Information
          </h5>

          <div align="center"> <br />
            <div class="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-500">
              <button type="submit" class= "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Volunteer for teaching
              </button><br /> <br />
              
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Volunteer for give things
              </button> <br /> <br />

              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Volunteer for give money
              </button>
            </div>
          </div>
        </div>
        
        {/* form */}
        <div align="center"> <br /><br />
          <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center" >
            Register Form to Volunteer
          </h5> <br />
        </div>
      </div>
      <br />
      <div class="font-medium rounded-lg text-sm px-5 py-3.5">
        <div className='form_register'>
          <label className="text_label" htmlFor="">Full Name   </label> 
          <input className="input" type="text" placeholder='Enter Full Name' /> <br />
          <label className="text_label" htmlFor="">Email or Phone</label> 
          <input className="input" type="text" placeholder='Enter Email or Phone' /> <br />
          <label className="text_label" htmlFor="">Address    </label> 
          <input className="input" type="text" placeholder='Enter Your Address' /> <br />
          <label className="text_label" htmlFor="">Country    </label> 
          <input className="input" type="text" placeholder='Enter Your Country' /> <br />
          <label className="text_label" htmlFor="">Do you use to volunteer befor?</label> 
          <input className="input" type="text" placeholder='Yes or No' /> <br /><br />

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Register
          </button>
          <br />
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                We will keep your information in private.
          </div>
        </div>
      </div>
      <br />

      <Footer/>
    </>
  )
}
