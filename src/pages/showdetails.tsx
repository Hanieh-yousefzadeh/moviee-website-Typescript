import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Star } from "lucide-react"
import Header from "../components/header";
import Footer from "../components/footer";
import type { Show } from "./home";
function ShowDetails() {
    const { id } = useParams()
    const [show, setShow] = useState<Show| null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // console.log(id)

    useEffect(() => {
        async function fetchShow() {

            setLoading(true);
            setError("");
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`)

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await response.json();
                // console.log(data)
                // console.log(data.genres)
                setShow(data)
            } catch (error) {
                setError("Something went wrong. Please try again.");
                setShow(null);

            } finally {
                setLoading(false);
            }

        }
        fetchShow();

    }, [id]);

    if (loading) {
        return (<h1 className="text-neutral-50 text-3xl pl-20 pt-20 ">Loading...</h1>)
    }

    if (error) {
        return (<h1 className="text-amber-600 text-3xl pl-20 pt-20">{error}</h1>);
    }

    if (!show) {
        return ( <h1 className="text-neutral-400 text-3xl pl-20 pt-20"> Show not found. </h1>);
    }
    return (
        <div>
            <Header />
            <section className="xl:px-17 flex sm:py-20 justify-center xl:justify-start px-6 py-15 sm:px-10">
                <div className="text-neutral-50 sm:flex sm:flex-row  flex-col lg:gap-15 sm:gap-10">

                    <img className=" w-70 lg:w-100 xl:w-95 opacity-60 rounded-xl" src={show.image ? show.image.medium : "/assets/images/22956.jpg"} alt="" />
                    <div className="flex flex-col gap-3 justify-center">
                        <h1 className="xl:text-4xl lg:text-3xl text-base sm:text-lg lg:pt-0 pt-7 xl:pt-10">{show.name}</h1>

                        <div className="flex items-center sm:gap-4 gap-3 text-neutral-400 xl:pt-3 lg:pt-2 sm:text-base text-xs">
                            <p className="sm:pr-6 pr-3">{show.genres.join(",")}</p>
                            <p>{show.premiered?.slice(0, 4)}</p>
                            <p className="flex items-center"><Star className="text-[#CF900C] fill-[#CF900C] size-4 pr-0.5" />{show.rating ? show.rating.average : 1}</p>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: show.summary }} className="xl:w-200 sm:w-90 lg:w-120 xl:pt-12 lg:pt-10 pt-5 xl:text-lg text-sm opacity-75" />
                        <div className="text-neutral-50 sm:pt-8 pt-5 flex gap-5">
                            <button className="lg:text-base text-xs font-medium px-3.5 py-1.5 lg:px-8 sm:py-2.5 mt-2 bg-[#CF900C] rounded-full self-start text-zinc-950 hover:text-zinc-100 cursor-pointer">Whatch Online</button>
                            <button className="lg:text-base text-xs font-medium px-6 py-1.5 lg:px-12 sm:py-2.5 mt-2 bg-[#CF900C] rounded-full self-start text-zinc-950 hover:text-zinc-100 cursor-pointer">Download</button>
                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
};
export default ShowDetails;