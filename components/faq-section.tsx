"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function FAQSection() {
    const t = useTranslations();

    const faqs = [
        {
            question: t("faq.q1.question"),
            answer: t("faq.q1.answer"),
        },
        {
            question: t("faq.q2.question"),
            answer: t("faq.q2.answer"),
        },
        {
            question: t("faq.q3.question"),
            answer: t("faq.q3.answer"),
        },
        {
            question: t("faq.q4.question"),
            answer: t("faq.q4.answer"),
        },
        {
            question: t("faq.q5.question"),
            answer: t("faq.q5.answer"),
        },
        {
            question: t("faq.q6.question"),
            answer: t("faq.q6.answer"),
        },
    ];
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("faq.title")}</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-5">
                                    <span className="font-medium">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
