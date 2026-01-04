"use client";

import { motion } from "framer-motion";
import { PhoneIcon, FileTextIcon, CodeSimpleIcon, CheckCircleIcon, HeadsetIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export function ProcessSection() {
    const t = useTranslations();

    const steps = [
        {
            icon: PhoneIcon,
            number: "01",
            title: t("process.step1.title"),
            duration: t("process.step1.duration"),
            description: t("process.step1.description"),
        },
        {
            icon: FileTextIcon,
            number: "02",
            title: t("process.step2.title"),
            duration: t("process.step2.duration"),
            description: t("process.step2.description"),
        },
        {
            icon: CodeSimpleIcon,
            number: "03",
            title: t("process.step3.title"),
            duration: t("process.step3.duration"),
            description: t("process.step3.description"),
        },
        {
            icon: CheckCircleIcon,
            number: "04",
            title: t("process.step4.title"),
            duration: t("process.step4.duration"),
            description: t("process.step4.description"),
        },
        {
            icon: HeadsetIcon,
            number: "05",
            title: t("process.step5.title"),
            duration: t("process.step5.duration"),
            description: t("process.step5.description"),
        },
    ];
    return (
        <section id="process" className="py-24 lg:py-32 bg-card/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("process.title")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("process.subtitle")}</p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex gap-6 pb-12 last:pb-0"
                        >
                            {index < steps.length - 1 && (
                                <div className="absolute left-6 top-14 w-px h-[calc(100%-3.5rem)] bg-border" />
                            )}

                            <div className="relative z-10 flex items-center justify-center size-12 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                                <step.icon className="size-5 text-accent" />
                            </div>

                            <div className="flex-1 pt-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-xs font-mono text-accent">{step.number}</span>
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                </div>
                                <p className="text-sm text-accent mb-2">{step.duration}</p>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
