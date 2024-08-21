export default function Page() {
    return(
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Resume</h1>

            <br/>

            <div className="drop-shadow-2xl">
            <iframe src="/resume.pdf" className="w-full h-[745px] border-0" />
            </div>

        </section>
    )
}