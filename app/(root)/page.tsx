import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;

  const posts = [{
    id: 1,
    views: 100,
    author: { _id: 1 , name: "John Doe" },
    description: "This is a sample startup pitch description that showcases the idea and potential of the startup.",
    image: "https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5f1842b30fa405557c21b09c_COMPUTER%20VISION-01.jpg",
    category: "Tech",
    title: "Innovative Tech Startup",
    _createdAt: new Date(),
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> 
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Grab Attention of Investors. 
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={index} post={post} />
            ))  
          ):(
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
