import Contact from "app/components/contact";
import Link from "next/link";

export default function Page() {
    return(
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Tutoring Services</h1>
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
            <Link href="/contact" className=" text-xl font-bold text-stone-600 dark:text-stone-300 hover:underline">
                Contact me
            </Link>
        </section>
    )
}