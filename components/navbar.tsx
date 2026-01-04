"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListIcon, XIcon, GlobeIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { href: "#services", label: t("navbar.services") },
        { href: "#portfolio", label: t("navbar.portfolio") },
        { href: "#process", label: t("navbar.process") },
        { href: "#contact", label: t("navbar.contact") },
    ];

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "es" : "en";
        router.push(pathname, { locale: nextLocale });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logos/horizontal-dark.png"
                            alt="QuickStack"
                            className="h-8 w-auto"
                            width={ 580 }
                            height={ 140 }
                            loading="lazy"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <GlobeIcon className="size-4" />
                            {locale.toUpperCase()}
                        </button>
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="#contact">{t("navbar.cta")}</Link>
                        </Button>
                    </div>

                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XIcon className="size-6" /> : <ListIcon className="size-6" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-1 text-sm text-muted-foreground"
                                >
                                    <GlobeIcon className="size-4" />
                                    {locale.toUpperCase()}
                                </button>
                                <Button asChild size="sm" className="flex-1">
                                    <Link href="#contact">{t("navbar.cta")}</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
