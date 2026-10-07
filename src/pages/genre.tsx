import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowCart from "../components/showCart";
import Header from "../components/header";
import Footer from "../components/footer";
import type { Show } from "./home";
function Genre() {

    const [shows, setShows] = useState<Show[]>([]);
    const { genre } = useParams();
    // console.log(genre)

    useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            setShows(data);
            // console.log(data[0].genres);
            // console.log(data.filter((show) => show.genres.includes("Action")));
        }

        fetchShows();
    }, [])
    const filter = shows.filter((show) => (
        show.genres.includes(
            genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : "")
    ));
    // console.log(filter)
    return (
        <div>
            <Header />
            <div className="lg:px-14 sm:px-7  bg-[#111111] xl:py-20 py-10 px-4">
                <h1 className="font-medium sm:pb-10 pb-6 pl-3 lg:text-2xl sm:text-lg text-neutral-300">{genre}</h1>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-5 xl:gap-y-7 gap-x-2">
                    {filter.map((show) => (<ShowCart key={show.id} show={show} />))}
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Genre;