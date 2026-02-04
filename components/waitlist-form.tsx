"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                console.error("Supabase error:", error);

                // Handle already exists error (code 23505) gracefully
                if (error.code === '23505') {
                    setStatus("success");
                    setEmail("");
                    return;
                }

                setStatus("error");
                return;
            }

            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error("Form submission error:", err);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500/10 rounded-full border border-green-500/20 text-green-400 backdrop-blur-md animate-in fade-in zoom-in duration-300">
                <Check className="w-4 h-4" />
                <span className="font-mono text-sm">You're on the list. Verification pending.</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-sm mx-auto group">
            <div className="flex items-center w-full bg-white/5 border border-white/10 rounded-full p-1 focus-within:ring-1 focus-within:ring-white/20 transition-all duration-300 hover:bg-white/[0.07]">
                <input
                    type="email"
                    placeholder="enterprise@domain.com"
                    aria-label="Email address for waitlist"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="flex-grow bg-transparent border-none text-white px-5 py-3 focus:outline-none font-mono text-sm placeholder:text-neutral-600 disabled:opacity-50 min-w-0"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-5 py-2.5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-all disabled:opacity-50 flex items-center gap-2 flex-shrink-0"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <>
                            <span>Join</span>
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>

            {status === "error" && (
                <p className="absolute -bottom-8 left-6 text-red-500 text-[11px] font-mono animate-pulse">
                    Submission failed. Please try again.
                </p>
            )}
        </form>
    );
}
