import Head from "next/head"
import { Card } from "../src/components/card"

// For testing purposes only
import { texts } from "../src/components/texts"
import { getAllNews } from "../src/lib/api"

export default function Home({ allNews }) {
    return (
        <>
            <Head>
                <title>Praxis Geelhaar</title>
            </Head>
            <header className="p-6 h-20 border-b-2 border-primary-800 fixed top-0 left-0 right-0 bg-white z-10">
                <div className="container mx-auto flex justify-between items-center text-primary-800 font-semibold">
                    <div>MENU</div>
                    <img
                        src="/assets/logo.png"
                        alt="Logo der Praxis Geelhaar"
                        className="w-64 h-auto"
                    />
                </div>
            </header>
            <main className="mt-20">
                <section className="bg-white flex flex-col bg-eye_catcher_liebenzell">
                    <h4 className="text-3xl text-primary-800 p-4">
                        Ehrlichkeit.
                        <br /> Qualität.
                        <br /> Menschlichkeit.
                    </h4>
                    <p className="p-4">
                        »Ich lege sehr viel Wert auf das Wohlbefinden unserer Patienten. Gemeinsam
                        mit Ihnen wählen wir die schonenste und beste Behandlung. – Günter H.
                        Geelhaar
                    </p>
                    <img
                        className="self-end"
                        src="/assets/guenter_geelhaar_portrait.png"
                        alt="Guenter Geelhaar"
                    />
                </section>
                <section className="bg-primary-800 p-4">
                    <h2 className="text-white font-bold p-6 text-xl tracking-wider">Nachrichten</h2>
                    <div className="px-6">
                        {allNews.map((news) => (
                            <>
                                <h4 className="text-xl text-white">{news.title}</h4>
                                <p className="mt-2 text-white whitespace-pre-wrap">
                                    {news.content}
                                </p>
                            </>
                        ))}
                    </div>
                </section>
                <section className="bg-white container mx-auto">
                    <h2 className="text-primary-800 font-bold p-6 text-xl tracking-wider">
                        Tätigkeitsschwerpunkte
                    </h2>
                    <div className="sm:flex sm:flex-wrap sm:justify-between">
                        {texts.map((text) => (
                            <Card key={text.title} {...text} />
                        ))}
                    </div>
                </section>
                <section className="bg-primary-100 h-96 flex justify-center items-center">
                    KONTAKT
                </section>
                <section className="bg-white h-96 flex justify-center items-center">
                    SPRECHZEITEN
                </section>
                <section className="bg-primary-100 h-96 flex justify-center items-center">
                    GÜNTER GEELHAAR / TEAM
                </section>
            </main>
            <footer className="container mx-auto flex justify-center items-center text-primary-800 h-6">
                FOOTER
            </footer>
        </>
    )
}

export async function getStaticProps() {
    const allNews = getAllNews(["title", "date", "content"])

    return {
        props: { allNews },
    }
}
