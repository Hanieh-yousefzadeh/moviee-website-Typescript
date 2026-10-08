import { useState, useEffect } from "react";
import { Link } from "react-router";
import { CircleX } from "lucide-react";
import Header from "../components/header";
import ShowCart from "../components/showCart";
import Footer from "../components/footer";
import type { Show } from "./home";
type SearchResult = {
    score : number;
    show : Show
}

function Search() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState<SearchResult[]>([]);
    const [selected, setSelected] = useState<Show[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        async function getFeatured() {

            setLoading(true);
            setError("");

            try {
                const response = await fetch("https://api.tvmaze.com/shows?page=1");

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setSelected(data.slice(0, 4));
                
            }catch(error){
                setError("Something went wrong. Please try again.");
                setResult([]);
            }finally{
                setLoading(false);
            }
        }
        getFeatured();

    }, []);

    function handelSearch(e :React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearch(value);
    }

    async function searchShows() {

        if (!search.trim()) {
            return alert('pleas type somthing ...')
        }
        setLoading(true);
        setError("");
        setHasSearched(true);

        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            // console.log(data)
            setResult(data);

        } catch (error) {

            setError("Something went wrong. Please try again.");
            setResult([]);

        } finally {
            setLoading(false);
        }



    }

    function handelSubmit(e :React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (loading) return;
        searchShows()
        // setSearch("")
    }


    return (
        <div>
            <Header />

            <div className="lg:px-14 sm:px-7 px-6  bg-[#111111] xl:pt-20 xl:pb-50 py-10 ">
                <form onSubmit={handelSubmit} className="flex justify-center sm:pb-12 pb-10 sm:gap-4 gap-2 items-center">
                    <Link to="/"> <CircleX className="text-[#CF900C] sm:size-9 size-6" /> </Link>

                    <input type="text" value={search} onChange={handelSearch} placeholder="Search . . ." className="bg-[#4a2f093a] outline-none sm:h-10 sm:w-200 rounded-full px-5 placeholder:text-neutral-500 sm:placeholder:text-lg sm:pb-8 sm:pt-7 py-2 caret-neutral-500 text-neutral-300 sm:text-lg text-sm" />
                </form>


                {!hasSearched && (
                    <div>
                        <h2 className="text-neutral-300 sm:text-xl text-base pb-10 pl-2">Most Viewed </h2>

                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-3 xl:gap-y-7 gap-x-2">
                            {selected.map((show) => (
                                <ShowCart key={show.id} show={show} />
                            ))}
                        </div>
                    </div>
                )}

                {loading && (
                    <p className="text-neutral-300 text-center py-10">Loading... </p>
                )}

                {!loading && error && (
                    <p className="text-amber-600 text-center py-10">{error}</p>
                )}

                {hasSearched && result.length === 0 && (
                    <p className="text-neutral-400 text-center py-10"> No movie found.</p>
                )}

                {result.length > 0 && (

                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-5 xl:gap-y-7 gap-x-2 ">
                        {result.map((item) => (
                            <ShowCart key={item.show.id} show={item.show} />
                        ))}
                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
}


export default Search;