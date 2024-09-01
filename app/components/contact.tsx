'use client';
import React from 'react';
console.log("API Key:", process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY);

//This contact form component allows users to send me a message. It uses the Web3Forms API to send the message to my email. The form is styled using Tailwind CSS

export default function Contact() {
    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target as HTMLFormElement; //This is a type assertion. It is used to tell TypeScript that the object is of a specific type. In this case, it is an HTMLFormElement.
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY,
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            alert("Message sent succesfully!");
            //I want to incorporate a better alert system in the future with sweetalert2.

            form.reset();
        }
    }

    return (
        <section className="bg-stone-400 dark:bg-stone-600 p-6 rounded-2xl shadow-2xl">
            <form id="contact-form" onSubmit={handleSubmit}>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
                <div>
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" name="name" required placeholder="Your name" className="mt-1 block w-full px-4 py-2 bg-stone-300 dark:bg-stone-700 text-slate-700 dark:text-white rounded-md border border-slate-400 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-stone-300"
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" name="email" required placeholder="email@example.com" className="mt-1 block w-full px-4 py-2 bg-stone-300 dark:bg-stone-700 text-slate-700 dark:text-white rounded-md border border-slate-400 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-stone-300"/>
                </div>

                <br />

                <div>
                    <label htmlFor="message" className="block">Message</label>
                    <textarea name="message" required rows={3} placeholder="Enter Message" className="mt-1 block w-full px-4 py-2 bg-stone-300 dark:bg-stone-700 text-slate-700 dark:text-white rounded-md border border-slate-400 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-stone-300"
                    ></textarea>
                </div>
                <br />
                <button type="submit" className="w-full py-2 px-4 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-700"
                >Send</button>
            </form>
        </section>
    );
}