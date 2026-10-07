import { useState, useEffect } from "react";
import ShowCart from "../components/showCart";
import Header from "../components/header";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react"
import Hero from "../components/hero";
import Footer from "../components/footer";

export type Show = {
    id: number;
    name:string;
    rating:{
        average:number
    } ;
    image :{
        medium :string;
    }
    premiered: string;
    genres : string[];
    summary :string
}
function Home() {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchShows() {

            setLoading(true);
            setError("");

            try {
                const response = await fetch("https://api.tvmaze.com/shows?page=1")

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await response.json();
                // console.log(data)
                setShows(data)

            } catch (error) {
                setError("Something went wrong. Please try again.");
                setShows([]);
            } finally {
                setLoading(false);
            }

        }

        fetchShows();
    }, [])

    if (loading) {
        return (<h1 className="text-neutral-400 text-3xl pl-20 pt-20">Loading...</h1>)
    }

    if (error) {
        return (<h1 className="text-amber-600 text-3xl pl-20 pt-20">{error} </h1>)
    }

    if (shows.length === 0) {
        return (<h1 className="text-neutral-400 text-3xl pl-20 pt-20"> No shows found.</h1>)
    }

    // console.log(shows);
    return (
        <div>
            <Header />
            <Hero />
            <section className="text-neutral-50 bg-[#0c0c0cfa] sm:py-25 lg:px-15 px-5 sm:px-8 pt-10 pb-13">
                <div className="flex justify-between sm:pb-15 sm:text-xl text-sm pb-5 ">
                    <h2 className="lg:pl-1 xl:pl-2 ">Latest</h2>
                    <Link to="/shows" className="flex items-center sm:gap-2.5 hover:text-[#CF900C] xl:pr-2">Veiw all <ChevronRight className="sm:size-6 pt-1 size-5" /></Link>
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-y-0 gap-y-3 ">
                    {[...shows].sort((a, b) => new Date(b.premiered).getTime() - new Date(a.premiered).getTime()).slice(0, 4).map((show) => (
                        <ShowCart key={show.id} show={show} />
                    ))}

                </div>
            </section>
            <Footer />
        </div>
    )
};
export default Home;