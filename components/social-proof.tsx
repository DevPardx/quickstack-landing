"use client";

import { motion } from "framer-motion";
import { RocketLaunchIcon, ClockIcon, ThumbsUpIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export function SocialProof() {
    const t = useTranslations();

    const stats = [
        { icon: RocketLaunchIcon, value: "10+", label: t("socialProof.label1") },
        { icon: ClockIcon, value: "2", label: t("socialProof.label2") },
        { icon: ThumbsUpIcon, value: "100%", label: t("socialProof.label3") },
    ];
    return (
        <section className="py-12 border-y border-border bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <stat.icon className="w-5 h-5 text-accent" />
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                                <span className="text-sm text-muted-foreground">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
