import { Link } from "react-router";
import { Star } from "lucide-react";
import { type Show } from "../pages/home";


type ShowCartProps = {
    show: Show;
};

function ShowCart({ show} :ShowCartProps) {

    let rating = 1;
    if (show.rating && show.rating.average) {
        rating = show.rating.average;
    }
    return (
        <div className="box-border pl-1.5 sm:pl-2 lg:pl-2.5 ">
            <Link to={`/show/${show.id}`}>

                <img src={show.image ? show.image.medium :"/assets/images/22956.jpg"} alt="" className="opacity-60  w-32 lg:w-52 sm:w-40 rounded-t-xl xl:w-81 " />
                <div className="flex flex-col text-base lg:text-lg sm:pt-3 pb-3 sm:px-4 pt-1.5 px-2 gap-2 bg-[#4a2f093a]  sm:w-40 w-32 xl:w-81 lg:w-52 rounded-b-xl ">
                    <h3 className="sm:text-base text-sm sm:h-6 h-9 text-neutral-50">{show.name}</h3>
                    <div className="flex gap-3 sm:text-sm text-xs text-neutral-400">
                        <p>{show.premiered?.slice(0, 4)}</p>
                        <span className="flex items-center"><Star className="text-[#CF900C] fill-[#CF900C] size-4 pr-0.5" />{rating}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
};
export default ShowCart;