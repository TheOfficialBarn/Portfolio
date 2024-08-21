import Contact from "app/components/contact";

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Reach out to me!</h1>
            <p>Please give me two business days to respond to any message. </p>
            <div className="my-8">
                <Contact />
            </div>
        </section>
    );
};