import Navbar from "../components/Navbar";
function SignUp() {
  return (
    <div className="flex justify-center pt-10 px-3">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">
            Register
          </h5>
          <div>
            <div className=" grid grid-cols-2">
              <div className="pr-2">
                <div className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2">
                  Frist name*
                </div>
                <input
                type="first-name"
                name="first-name"
                id="first-name"
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:gray-400 dark:text-white "
                placeholder="Enter your first name"
                required
              // onChange={(e)=> setEmail(e.target.value)}
              />
              </div>
              <div className="pl-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2">
                  Last name*
                </div>
                <input
                type="first-name"
                name="first-name"
                id="first-name"
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:gray-400 dark:text-white"
                placeholder="Enter your first name"
                required
              // onChange={(e)=> setEmail(e.target.value)}
              />
              </div>              
              </div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4"
                >
                  Email*
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="username@gmail.com"
                  required
                  // onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
            <div>
              <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password*
              </label>
              <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              // onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div>
              <label
              htmlFor="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              // onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                  <label
                    htmlFor="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  // onClick={onLogin}
                >
                  Register
                </button>
              <div
                class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already have an account?
                  <a
                    href="/login"
                    class="text-blue-700 hover:underline dark:text-blue-500">
                    Login here
                  </a>
              </div>
        </form>
      </div>
    </div>
  );
}
export default function SignUpPage() {
  return (
    <div>
      <Navbar />
      <SignUp />
    </div>
  );
}