function Hero() {
    return (
        <div className="bg-[url(/assets/images/Watch-Free-Hero-2048x1152-1-1536x864.png)] text-neutral-100 bg-cover sm:h-160 h-70 flex flex-col sm:gap-8 justify-center xl:pl-20 lg:pl-15 sm:px-8 px-5 gap-5">
            <h4 className="font-bold lg:text-6xl sm:text-5xl w-60 lg:w-190 sm:w-160 text-shadow-[100px_5px_50px_black] sm:leading-17">Free Movies Online, Watch Anytime Anywhere.</h4>
            <p className="sm:text-2xl text-sm sm:w-150 w-60 sm:leading-8 opacity-95 text-shadow-[100px_0px_30px_black]">The search is over! Let Plex help you find the perfect movie to watch tonight for free.</p>
            <button className="sm:text-lg text-xs font-medium px-3.5 py-1.5 sm:px-8 sm:py-2.5 mt-2 bg-[#CF900C] rounded-full self-start text-zinc-950 hover:text-zinc-100 cursor-pointer">Watch Free</button>
        </div>
    )
};
export default Hero;