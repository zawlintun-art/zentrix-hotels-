const destinations = [
  { name: "Kyoto, Japan", note: "Quiet mornings, timeless streets", image: "photo-1493976040374-85c8e12f0c0e" },
  { name: "Lisbon, Portugal", note: "Sunlit stays by the Atlantic", image: "photo-1555881400-74d7acaacd8b" },
  { name: "Copenhagen, Denmark", note: "Design-led city escapes", image: "photo-1513622470522-26c3c8a854bc" },
];
const hotels = [
  { name: "The Audo", place: "Copenhagen, Denmark", rating: "4.92", rate: "$286", image: "photo-1542314831-068cd1dbfeeb", tag: "DESIGN HOTEL" },
  { name: "Casa Mãe", place: "Lagos, Portugal", rating: "4.87", rate: "$214", image: "photo-1611892440504-42a792e24d32", tag: "GUEST FAVORITE" },
  { name: "Ace Hotel Kyoto", place: "Kyoto, Japan", rating: "4.95", rate: "$332", image: "photo-1566073771259-6a8506099945", tag: "BOUTIQUE STAY" },
];
const imageUrl = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Brand() {
  return <a href="#top" aria-label="ZENTRIX Hotels home" className="text-[19px] font-semibold tracking-[0.12em]">ZENTRIX<span className="ml-2 text-[11px] font-normal tracking-[0.22em] text-[#708187]">HOTELS</span></a>;
}

export default function HomePage() {
  return <main id="top">
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
      <Brand />
      <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm text-[#41585f] md:flex"><a href="#destinations" className="hover:text-[#145b62]">Destinations</a><a href="#stays" className="hover:text-[#145b62]">Our stays</a><a href="#about" className="hover:text-[#145b62]">Our approach</a></nav>
      <a href="#account" className="rounded-full border border-[#cbd8d5] px-5 py-2.5 text-sm font-medium hover:bg-white">Sign in <span aria-hidden="true">↗</span></a>
    </header>

    <section className="mx-auto max-w-[1440px] px-6 lg:px-12" aria-labelledby="hero-title">
      <div className="relative min-h-[590px] overflow-hidden rounded-[28px] bg-[#1a3f43] sm:min-h-[650px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,34,38,.72) 0%, rgba(9,34,38,.26) 62%, rgba(9,34,38,.04) 100%), url(${imageUrl("photo-1511818966892-d7d671e672a2", 2000)})` }} />
        <div className="relative flex min-h-[590px] flex-col justify-center px-7 py-16 text-white sm:min-h-[650px] sm:px-14 lg:px-20">
          <p className="mb-6 text-xs font-semibold tracking-[0.23em] text-[#d4e5df]">A MORE CONSIDERED WAY TO STAY</p>
          <h1 id="hero-title" className="max-w-3xl text-5xl leading-[1.04] font-medium tracking-[-0.045em] sm:text-7xl">Find your place<br className="hidden sm:block"/> in the world.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">Independent hotels, thoughtfully selected for the way you want to travel.</p>
          <form action="#stays" className="mt-12 grid max-w-[940px] gap-2 rounded-2xl bg-white p-2 text-[#102b35] shadow-xl sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:rounded-full sm:p-2">
            <label className="flex flex-col justify-center px-4 py-2 sm:px-6"><span className="text-[10px] font-bold tracking-[.16em] text-[#64777b]">DESTINATION</span><input name="destination" placeholder="Where would you like to go?" className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-[#889699]" /></label>
            <label className="flex flex-col justify-center border-t border-[#e7ece9] px-4 py-2 sm:border-t-0 sm:border-l sm:px-5"><span className="text-[10px] font-bold tracking-[.16em] text-[#64777b]">CHECK IN</span><input aria-label="Check in" type="date" className="mt-1 w-full bg-transparent text-sm outline-none text-[#64777b]" /></label>
            <label className="flex flex-col justify-center border-t border-[#e7ece9] px-4 py-2 sm:border-t-0 sm:border-l sm:px-5"><span className="text-[10px] font-bold tracking-[.16em] text-[#64777b]">CHECK OUT</span><input aria-label="Check out" type="date" className="mt-1 w-full bg-transparent text-sm outline-none text-[#64777b]" /></label>
            <button className="rounded-full bg-[#145b62] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0d484e] sm:px-9" type="submit">Explore stays <span aria-hidden="true">→</span></button>
          </form>
          <p className="mt-4 text-xs text-white/65">Curated independently. Booked with confidence.</p>
        </div>
        <span className="absolute right-8 bottom-7 hidden text-xs tracking-[.16em] text-white/80 md:block">01 — MADE FOR THE WAY YOU TRAVEL</span>
      </div>
    </section>

    <section id="destinations" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mb-9 flex items-end justify-between gap-4"><div><p className="mb-3 text-[11px] font-bold tracking-[.2em] text-[#608078]">GO SOMEWHERE GOOD</p><h2 className="text-3xl font-medium tracking-[-.035em] sm:text-4xl">Places with a point of view</h2></div><a href="#stays" className="hidden text-sm font-medium text-[#145b62] sm:block">All destinations ↗</a></div>
      <div className="grid gap-5 md:grid-cols-3">{destinations.map((place) => <a key={place.name} href="#stays" className="group relative h-[350px] overflow-hidden rounded-2xl bg-[#d6dfda]"><div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `linear-gradient(0deg, rgba(11,32,34,.68), transparent 65%), url(${imageUrl(place.image, 900)})` }} /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-xs text-white/75">{place.note}</p><h3 className="mt-1 text-2xl font-medium">{place.name}</h3></div></a>)}</div>
    </section>

    <section id="stays" className="bg-[#edf1ed] py-20 lg:py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-12">
      <div className="mb-9 flex items-end justify-between gap-4"><div><p className="mb-3 text-[11px] font-bold tracking-[.2em] text-[#608078]">SELECTED FOR YOU</p><h2 className="text-3xl font-medium tracking-[-.035em] sm:text-4xl">Stays worth the journey</h2></div><a href="#destinations" className="hidden text-sm font-medium text-[#145b62] sm:block">View all stays ↗</a></div>
      <div className="grid gap-6 md:grid-cols-3">{hotels.map((hotel) => <article key={hotel.name} className="overflow-hidden rounded-2xl bg-white"><div className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl(hotel.image, 900)})` }}><span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-2 text-[9px] font-bold tracking-[.15em]">{hotel.tag}</span><button aria-label={`Save ${hotel.name}`} className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl">♡</button></div><div className="p-5"><div className="flex items-start justify-between gap-2"><div><h3 className="text-lg font-semibold">{hotel.name}</h3><p className="mt-1 text-sm text-[#6e7d7d]">{hotel.place}</p></div><span className="text-sm">★ {hotel.rating}</span></div><p className="mt-5 text-sm"><strong>{hotel.rate}</strong><span className="text-[#738181]"> / night</span></p></div></article>)}</div>
    </div></section>

    <section id="about" className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-28"><div><p className="mb-4 text-[11px] font-bold tracking-[.2em] text-[#608078]">TRAVEL, WITH INTENTION</p><h2 className="max-w-xl text-4xl leading-tight font-medium tracking-[-.04em] sm:text-5xl">Good stays make<br/> a world of difference.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#617378]">We bring distinctive independent hotels into one considered collection, so finding somewhere meaningful feels effortless.</p><a href="#destinations" className="mt-8 inline-flex rounded-full bg-[#145b62] px-6 py-3.5 text-sm font-semibold text-white">Discover our approach ↗</a></div><div role="img" aria-label="A quiet hotel lounge" className="relative h-[360px] overflow-hidden rounded-2xl bg-cover bg-center sm:h-[440px]" style={{ backgroundImage: `url(${imageUrl("photo-1445019980597-93fa8acb246c", 1100)})` }} /></section>

    <footer id="account" className="bg-[#102b35] text-white"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-12"><div><Brand/><p className="mt-5 max-w-xs text-sm leading-6 text-white/65">A global collection of independent hotels, for better journeys.</p></div><div><h2 className="text-xs font-bold tracking-[.16em] text-white/55">EXPLORE</h2><a className="mt-5 block text-sm" href="#destinations">Destinations</a><a className="mt-3 block text-sm" href="#stays">Our stays</a></div><div><h2 className="text-xs font-bold tracking-[.16em] text-white/55">ZENTRIX</h2><a className="mt-5 block text-sm" href="#about">Our approach</a><a className="mt-3 block text-sm" href="mailto:hello@zentrix.example">Contact</a></div><div><h2 className="text-xs font-bold tracking-[.16em] text-white/55">YOUR ACCOUNT</h2><a className="mt-5 block text-sm" href="#account">Sign in or create account ↗</a><p className="mt-3 text-xs leading-5 text-white/55">Manage your trips and preferences.</p></div><div className="border-t border-white/15 pt-5 text-xs text-white/50 sm:col-span-2 lg:col-span-4">© 2026 ZENTRIX Hotels <span className="mx-3">·</span> Privacy <span className="mx-3">·</span> Terms <span className="float-right hidden sm:inline">Thoughtfully, everywhere.</span></div></div></footer>
  </main>;
}
