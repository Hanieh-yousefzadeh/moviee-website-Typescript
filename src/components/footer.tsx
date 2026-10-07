import { Link } from "react-router"
function Footer() {
    return (
        <footer className="bg-[#010101]">
           <div className="sm:pt-13 sm:px-9 xl:px-9">
             <div className="hidden sm:flex xl:gap-35 lg:gap-15 sm:gap-7 sm:pb-13  lg:px-9">
                <div>
                    <Link to="/" className="font-plex text-3xl text-2xl font-semibold text-neutral-300 xl:pr-50 lg:pr-20 sm:pl-1">Movie<span className="text-[#CF900C]">e</span></Link>
                    <div className="flex lg:gap-4 sm:gap-2  xl:mt-15 lg:mt-8 sm:mt-8 sm:pr-7">
                        <img src="/assets/images/facebook-svgrepo-com.svg" alt="" className="size-6 " />
                        <img src="/assets/images/linkedin-svgrepo-com.svg" alt="" className="size-5" />
                        <img src="/assets/images/instagram-logo-facebook-2-svgrepo-com.svg" alt="" className="size-6" />
                        <img src="/assets/images/tiktok-svgrepo-com.svg" alt="" className="size-5" />
                        <img src="/assets/images/twitter-3-svgrepo-com.svg" alt="" className="size-5" />
                    </div>
                </div>

                <div className="flex flex-col gap-3 xl:pt-4 sm:pt-2">
                    <Link to="/" className="text-neutral-300 font-semibold sm:text-base text-sm pb-3 hover:text-[#CF900C]" >Company</Link>
                    <Link to="/" className="sm:text-sm text-xs font-medium text-neutral-500 hover:text-[#CF900C]">About</Link>
                    <Link to="/" className="sm:text-sm text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Careers</Link>
                    <Link to="/" className="sm:text-sm text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Our Culture</Link>
                    <Link to="/" className="sm:text-sm text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Giving</Link>
                    <Link to="/" className="sm:text-sm text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Press Room</Link>
                </div>
                <div className="flex flex-col gap-3 xl:pt-4 sm:pt-2">
                    <Link to="/" className="text-neutral-300 font-semibold sm:text-base text-sm pb-3 hover:text-[#CF900C]">Wathch Free on Moviee</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Watch Free Movies</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Trending on Moviee</Link>
                </div>
                <div className="flex flex-col gap-3 xl:pt-4 sm:pt-2">
                    <Link to="/" className="text-neutral-300 font-semibold sm:text-base text-sm pb-3 hover:text-[#CF900C]">Discover</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Wath to Watch Now</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Wath to Watch on Ntflix</Link>
                </div>
                <div className="flex flex-col gap-3 xl:pt-4 sm:pt-2">
                    <Link to="/" className="text-neutral-300 font-semibold sm:text-base text-sm pb-3 hover:text-[#CF900C]">My Media</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Download App</Link>
                    <Link to="/" className="sm:text-sm font-medium text-neutral-500 hover:text-[#CF900C]">Plans</Link>
                </div>

            </div>

            <div className="sm:hidden pt-8 px-6">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 pt-1">
                        <Link to="/" className="text-neutral-300 font-semibold text-sm pb-3 hover:text-[#CF900C]" >Company</Link>
                        <Link to="/" className=" text-xs font-medium text-neutral-500 hover:text-[#CF900C]">About</Link>
                        <Link to="/" className=" text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Careers</Link>
                        <Link to="/" className=" text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Our Culture</Link>
                        <Link to="/" className=" text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Giving</Link>
                        <Link to="/" className=" text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Press Room</Link>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                        <Link to="/" className="text-neutral-300 font-semibold text-sm pb-3 hover:text-[#CF900C] w-27">Wathch Free on Moviee</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Watch Free Movies</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Trending on Moviee</Link>
                    </div>
                </div>
                <div className="flex pt-10 justify-between">
                    <div className="flex flex-col gap-2 pt-1 w-30">
                        <Link to="/" className="text-neutral-300 font-semibold text-sm pb-3 hover:text-[#CF900C]">Discover</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Wath to Watch Now</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Wath to Watch on Ntflix</Link>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                        <Link to="/" className="text-neutral-300 font-semiboldtext-sm pb-3 hover:text-[#CF900C]">My Media</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Download App</Link>
                        <Link to="/" className="text-xs font-medium text-neutral-500 hover:text-[#CF900C]">Plans</Link>
                    </div>
                </div>
                <div className="flex items-baseline justify-between py-5">
                    <Link to="/" className="font-plex text-2xl font-semibold text-neutral-300 ">Movie<span className="text-[#CF900C]">e</span></Link>
                    <div className="flex gap-2 mt-2">
                        <img src="/assets/images/facebook-svgrepo-com.svg" alt="" className="size-4.5" />
                        <img src="/assets/images/linkedin-svgrepo-com.svg" alt="" className="size-4" />
                        <img src="/assets/images/instagram-logo-facebook-2-svgrepo-com.svg" alt="" className="size-4.5" />
                        <img src="/assets/images/tiktok-svgrepo-com.svg" alt="" className=" size-4" />
                        <img src="/assets/images/twitter-3-svgrepo-com.svg" alt="" className=" size-4" />
                    </div>
                </div>
            </div>
           </div>

            <div className="xl:px-18 sm:px-9 lg:px-18 px-6 py-2 sm:py-3.5 text-neutral-500 text-xs sm:flex sm:flex-row flex-col justify-between border-t border-neutral-800">
                <p className="hidden sm:flex">Copyright © 2026 Moviee</p>
                <div className="flex sm:gap-8 gap-4.5">
                    <Link to="/">Privacy & Legal</Link>
                    <Link to="/">Accessibility</Link>
                    <Link to="/">Manage Cookies</Link>
                </div>
                <p className="sm:hidden pt-1.5">Copyright © 2026 Moviee</p>

            </div>

        </footer>
    )
};
export default Footer;