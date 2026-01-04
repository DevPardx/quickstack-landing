"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const techCategories = [
    {
        title: "Frontend",
        techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend",
        techs: ["Node.js", "Express", "NestJS", "RESTful APIs"],
    },
    {
        title: "Database",
        techs: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
        title: "Deploy & Tools",
        techs: ["Vercel", "DigitalOcean", "Stripe", "Resend"],
    },
];

export function TechStack() {
    const t = useTranslations();

    return (
        <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("techStack.title")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("techStack.subtitle")}
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-sm font-medium text-accent uppercase tracking-wider">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.techs.map((tech, techIndex) => (
                                    <motion.li
                                        key={tech}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + techIndex * 0.05 }}
                                        className="flex items-center gap-3 text-muted-foreground"
                                    >
                                        <span className="size-1.5 rounded-full bg-accent" />
                                        {tech}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
