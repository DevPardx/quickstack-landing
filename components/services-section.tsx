"use client";

import { motion } from "framer-motion";
import { CheckIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function ServicesSection() {
    const t = useTranslations();

    const services = [
        {
            badge: t("services.landing.badge"),
            name: t("services.landing.name"),
            price: t("services.landing.price"),
            duration: t("services.landing.duration"),
            features: [
                t("services.landing.feature1"),
                t("services.landing.feature2"),
                t("services.landing.feature3"),
                t("services.landing.feature4"),
                t("services.landing.feature5"),
            ],
            ideal: t("services.landing.ideal"),
            cta: t("services.landing.cta"),
            popular: false,
        },
        {
            badge: t("services.mvp.badge"),
            name: t("services.mvp.name"),
            price: t("services.mvp.price"),
            duration: t("services.mvp.duration"),
            features: [
                t("services.mvp.feature1"),
                t("services.mvp.feature2"),
                t("services.mvp.feature3"),
                t("services.mvp.feature4"),
                t("services.mvp.feature5"),
                t("services.mvp.feature6"),
            ],
            ideal: t("services.mvp.ideal"),
            cta: t("services.mvp.cta"),
            popular: true,
        },
        {
            badge: t("services.custom.badge"),
            name: t("services.custom.name"),
            price: t("services.custom.price"),
            duration: t("services.custom.duration"),
            features: [
                t("services.custom.feature1"),
                t("services.custom.feature2"),
                t("services.custom.feature3"),
                t("services.custom.feature4"),
                t("services.custom.feature5"),
            ],
            ideal: t("services.custom.ideal"),
            cta: t("services.custom.cta"),
            popular: false,
        },
    ];
    return (
        <section id="services" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("services.title")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("services.subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.popular
                                    ? "bg-card border-accent shadow-lg shadow-accent/10"
                                    : "bg-card border-border hover:border-muted-foreground/30"
                                }`}
                        >
                            <span
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4 ${service.popular ? "text-accent-foreground bg-linear-to-r from-green-600 to-accent" : "bg-secondary text-secondary-foreground"
                                    }`}
                            >
                                {service.badge}
                            </span>

                            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-2xl font-bold text-foreground">{service.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">{service.duration}</p>

                            <ul className="space-y-3 mb-6">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <CheckIcon className="size-4 text-accent mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-xs text-muted-foreground mb-6 pb-6 border-b border-border">
                                <span className="font-medium text-foreground">{t("services.idealFor")}</span> {service.ideal}
                            </p>

                            <Button
                                asChild
                                className={`w-full group ${service.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                <Link href="#contact">
                                    {service.cta}
                                    <ArrowRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
