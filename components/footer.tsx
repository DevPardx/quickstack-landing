"use client";
import Link from "next/link";
import { EnvelopeSimpleIcon, MapPinIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
    const t = useTranslations();

    const footerLinks = {
        servicios: [
            { label: t("footer.servicesLinks.landing"), href: "#services" },
            { label: t("footer.servicesLinks.mvp"), href: "#services" },
            { label: t("footer.servicesLinks.custom"), href: "#services" },
        ],
        legal: [
            { label: t("footer.legalLinks.terms"), href: "/terms" },
            { label: t("footer.legalLinks.privacy"), href: "/privacy" },
        ],
    };
    return (
        <footer className="py-16 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logos/horizontal-dark.png"
                                alt="QuickStack"
                                className="h-8 w-auto"
                                width={ 580 }
                                height={ 140 }
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">{t("footer.services")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.servicios.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">{t("footer.legal")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">{t("footer.contact")}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:projects@quickstack.agency"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <EnvelopeSimpleIcon className="size-4" />
                                    projects@quickstack.agency
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPinIcon className="size-4" />
                                San Salvador, SV
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/dev-pardx/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <LinkedinLogoIcon className="size-4" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">© { new Date().getFullYear() } QuickStack.</p>
                </div>
            </div>
        </footer>
    );
}
