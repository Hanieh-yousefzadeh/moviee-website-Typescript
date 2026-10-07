import { useEffect, useState } from "react";
import ShowCart from "../components/showCart";
import Header from "../components/header";
import Footer from "../components/footer";
import type { Show } from "./home";

function Shows() {

    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            // console.log(data)
            setShows(data)
        }

        fetchShows();
    }, [])

    return (
        <div>
            <Header />
            <div className="lg:px-14 sm:px-7  bg-[#111111] xl:py-20 py-10 px-4">
                <h1 className="font-medium sm:pb-10 pb-6 pl-3 lg:text-xl sm:text-lg text-[#CF900C]">All movies</h1>

                <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-5 xl:gap-y-7 gap-x-2">
                    {shows.map((show) => (
                        <ShowCart key={show.id} show={show} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );

};
export default Shows;