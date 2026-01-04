"use client";

import { motion } from "framer-motion";
import { CheckIcon, ArrowRightIcon, ArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function HeroSection() {
    const t = useTranslations();

    const features = [
        t("hero.feature1"),
        t("hero.feature2"),
        t("hero.feature3"),
    ];
    return (
        <section className="relative min-h-screen flex items-center pt-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm"
                        >
                            <span className="size-2 rounded-full bg-accent animate-pulse" />
                            {t("hero.badge")}
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                                {t("hero.title.part1")} <span className="bg-linear-to-r from-green-600 to-accent bg-clip-text text-transparent">{t("hero.title.part2")}</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                {t("hero.description")}
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3 text-muted-foreground"
                                >
                                    <span className="flex items-center justify-center size-5 rounded-full bg-accent/20 text-accent">
                                        <CheckIcon className="size-3" />
                                    </span>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button asChild size="lg" className="group">
                                <Link href="#contact">
                                    {t("hero.cta.primary")}
                                    <ArrowRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="group border-border bg-transparent">
                                <Link href="#portfolio">
                                    {t("hero.cta.secondary")}
                                    <ArrowDownIcon className="size-4 ml-2 group-hover:translate-y-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl" />

                            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-xs text-muted-foreground ml-2 font-mono">quickstack</span>
                                </div>

                                <div className="p-6 font-mono text-sm">
                                    <div className="space-y-2">
                                        <div className="text-muted-foreground">
                                            <span className="text-accent">const</span> proyecto{" "}
                                            <span className="text-muted-foreground">=</span> <span className="text-accent">{"{"}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-foreground">nombre</span>:{" "}
                                            <span className="text-green-400">{`"${t("hero.code.nombre")}"`}</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-foreground">tiempo</span>:{" "}
                                            <span className="text-green-400">{`"${t("hero.code.tiempo")}"`}</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-foreground">stack</span>: [
                                            <span className="text-green-400">{'"Next.js"'}</span>,{" "}
                                            <span className="text-green-400">{'"PostgreSQL"'}</span>,{" "}
                                            <span className="text-green-400">{'"NodeJS"'}</span>
                                            ],
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-foreground">estado</span>:{" "}
                                            <span className="text-green-400">{`"${t("hero.code.estado")}"`}</span>
                                        </div>
                                        <div className="text-accent">{"}"}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 border-t border-border">
                                    <div className="p-4 text-center border-r border-border">
                                        <div className="text-2xl font-bold text-foreground">10+</div>
                                        <div className="text-xs text-muted-foreground">{t("hero.stats.projects")}</div>
                                    </div>
                                    <div className="p-4 text-center border-r border-border">
                                        <div className="text-2xl font-bold text-foreground">2</div>
                                        <div className="text-xs text-muted-foreground">{t("hero.stats.weeks")}</div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="text-2xl font-bold text-accent">100%</div>
                                        <div className="text-xs text-muted-foreground">{t("hero.stats.satisfaction")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
