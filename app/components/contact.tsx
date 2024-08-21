'use client';

import React from 'react';

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
                access_key: "436c7fc2-a79f-4494-af33-f3eaea7ecf8a",
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
        <section className="bg-slate-800 p-6 rounded-2xl shadow-2xl">
            <form id="contact-form" onSubmit={handleSubmit}>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder="email@example.com" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required rows={3} placeholder="Enter Message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}