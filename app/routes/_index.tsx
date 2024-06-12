import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

import logo from "~/assets/logo.png";
import mainImg from "~/assets/mainImg.png";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      <div className="w-full bg-white flex justify-center pt-5">
        <div className=" flex align-baseline w-1/2 -mb-1 z-40">
          <img src={logo} />
        </div>
        <div className="absolute top-0 right-0">
          <div className="">
            {user ? (
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
              >
                View Notes for {user.email}
              </Link>
            ) : (
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <Link to="/join" className="">
                  Sign up
                </Link>
                <Link to="/login" className="  ">
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-secondPink flex justify-center pt-4">
        <div className="w-3/4">
          <img src={mainImg} alt="great sales" />
        </div>
      </div>
      <div className="relative sm:pb-16 sm:pt-8 bg-secondPink">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative sm:overflow-hidden sm:rounded-2xl">
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
