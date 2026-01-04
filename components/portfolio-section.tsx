"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function PortfolioSection() {
    const t = useTranslations();

    const projects = [
        {
            title: "MossBros",
            tag: t("portfolio.mossbros.tag"),
            stack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
            description: t("portfolio.mossbros.description"),
            features: [
                t("portfolio.mossbros.feature1"),
                t("portfolio.mossbros.feature2"),
                t("portfolio.mossbros.feature3"),
            ],
            result: t("portfolio.mossbros.result"),
            image: "/mossbros-screenshot.png",
        },
        {
            title: "AuthenticDoc",
            tag: t("portfolio.authenticdoc.tag"),
            stack: ["Rust", "WebAssembly", "Nostr", "Lightning"],
            description: t("portfolio.authenticdoc.description"),
            features: [
                t("portfolio.authenticdoc.feature1"),
                t("portfolio.authenticdoc.feature2"),
                t("portfolio.authenticdoc.feature3"),
            ],
            result: t("portfolio.authenticdoc.result"),
            image: "/authenticdoc-screenshot.png",
        },
        {
            title: "Raising Together",
            tag: t("portfolio.rtp.tag"),
            stack: ["Next.js", "React", "TypeScript", "Tailwind"],
            description: t("portfolio.rtp.description"),
            features: [
                t("portfolio.rtp.feature1"),
                t("portfolio.rtp.feature2"),
                t("portfolio.rtp.feature3"),
            ],
            result: t("portfolio.rtp.result"),
            image: "/rtp-screenshot.png",
        },
    ];
    return (
        <section id="portfolio" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("portfolio.title")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
                </motion.div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                }`}
                        >
                            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                <div className="relative rounded-2xl overflow-hidden border border-border bg-card group">
                                    <div className="">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            width={ 1920 }
                                            height={ 1440 }
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                                    {project.tag}
                                </span>

                                <h3 className="text-2xl font-bold">{project.title}</h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                                <ul className="space-y-2">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="size-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm font-medium text-accent pt-2">{project.result}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
