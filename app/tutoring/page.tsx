import Contact from "app/components/contact";

export default function Page() {
    return(
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Welcome to my tutoring page</h1>
            <p>I tutor middle school and high school students in the following subjects up to the collegiate level:</p>
            <br/>
            <ul className="list-disc pl-5"> {/*The */}
                <li>Algebra</li>
                <li>Chemistry</li>
                <li>English</li>
                <li>Calculus</li>
                <li>Physics</li>
                <li>Spanish</li>
                <li>Any Computer Course</li>
            </ul>
            <br/>
            <p>My rate is $15/hour for the first session and $30/hour moving forward. I am available for in-person tutoring in the Lawrence, KS area, or online tutoring via Zoom. Please contact me below for more details; I would love to chat!</p>
            <br/>
            <a href="/contact" className="text-indigo-400 dark:text-indigo-600 hover:underline">Contact me</a>
        </section>
    )
}