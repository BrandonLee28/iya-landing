"use client";

import WaitlistForm from "@/components/waitlist-form";
import GovernanceVis from "@/components/governance-vis";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative h-screen w-full overflow-y-auto md:overflow-hidden bg-[#0A0A0A] font-sans selection:bg-[#FF7F50] selection:text-white">

            {/* Hero Section - Full viewport, centered */}
            <section className="relative min-h-full flex flex-col items-center justify-center bg-[#050505] text-white">

                {/* ASCII Background */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <GovernanceVis />
                    <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-[1px]" />
                </div>

                {/* Spotlight Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

                {/* Top Navigation */}
                <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">
                    {/* Tiny Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-2xl font-bold tracking-tighter text-white"
                    >
                        iya
                    </motion.div>

                    {/* Accelerator Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col items-end text-neutral-500 text-sm font-medium"
                    >
                        <span className="uppercase tracking-widest text-[11px] mb-1 opacity-70">Participating in</span>
                        <div className="flex items-center gap-2 text-neutral-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] cursor-default">
                            Klaus Startup Challenge
                        </div>
                    </motion.div>
                </nav>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto"
                >
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="font-sans font-bold text-6xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tighter mb-8"
                    >
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">The Dashcam</span>
                        <br />
                        <span className="text-neutral-500">for AI Agents</span>
                    </motion.h1>

                    {/* Subheadline/Value Prop */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10"
                    >
                        Give companies the evidence they need to use autonomous AI without taking on massive legal risks.
                    </motion.p>

                    {/* Waitlist */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="w-full max-w-md flex flex-col items-center"
                    >
                        <WaitlistForm />


                    </motion.div>
                </motion.div>

            </section>
        </div>
    );
}
