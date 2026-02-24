"use client";

import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setStatus("error");
            setMessage("Please enter an email address.");
            return;
        }
        if (!validateEmail(email)) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setMessage("Thanks for subscribing!");
            setEmail("");
        }, 1000);
    };

    return (
        <div className="p-8 bg-zinc-50 dark:bg-white/5 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-3 text-foreground">Subscribe to our newsletter</h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">
                Get the latest AI insights and startup news directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status !== "idle") setStatus("idle");
                        }}
                        className={`w-full px-5 py-3 text-sm rounded-full border border-zinc-300 dark:border-zinc-700 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all ${status === "error" ? "border-red-500" : ""
                            }`}
                    />
                </div>
                <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full px-5 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50"
                >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {message && (
                    <p className={`text-xs mt-2 text-center ${status === "success" ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
