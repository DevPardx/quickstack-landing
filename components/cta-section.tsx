"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function CTASection() {
    const t = useTranslations();

    return (
        <section id="contact" className="py-24 lg:py-32 bg-card/30 border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                        {t("cta.heading.part1")} <span className="bg-linear-to-r from-green-600 to-accent bg-clip-text text-transparent">{t("cta.heading.part2")}</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("cta.description")}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button asChild size="lg" className="group text-lg px-8 py-6">
                            <Link href="https://calendly.com/quickstack-projects" target="_blank">
                                {t("cta.button")}
                                <ArrowRightIcon className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="pt-8"
                    >
                        <p className="text-sm text-muted-foreground mb-4">{t("cta.emailLabel")}</p>
                        <div className="flex items-center justify-center gap-6">
                            <a
                                href="mailto:projects@quickstack.agency"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <EnvelopeSimpleIcon className="size-4" />
                                projects@quickstack.agency
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
