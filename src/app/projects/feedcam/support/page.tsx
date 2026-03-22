"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleContext";

export default function FeedCamSupportPage() {
	useReveal();
	const { locale, setLocale, t } = useLocale();
	const s = t.support;

	return (
		<div className="grain noise relative min-h-screen">
			{/* Nav */}
			<nav className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
					<Link
						href="/projects/feedcam"
						className="text-sm font-medium text-muted transition-colors hover:text-foreground"
					>
						&larr; {s.back}
					</Link>
				</div>
			</nav>

			{/* Header */}
			<section className="px-6 pt-32 pb-16 text-center">
				<div className="mx-auto max-w-2xl">
					<h1 className="fade-in mb-4 text-4xl font-bold tracking-tight md:text-5xl">
						{s.title}
					</h1>
					<p className="fade-in fade-in-delay-1 text-lg text-muted">
						{s.subtitle}
					</p>
				</div>
			</section>

			{/* Contact */}
			<section className="border-t border-border bg-surface px-6 py-20">
				<div className="reveal mx-auto max-w-2xl">
					<h2 className="mb-4 text-2xl font-bold tracking-tight">
						{s.contactTitle}
					</h2>
					<p className="mb-6 text-muted">{s.contactDesc}</p>
					<a
						href="mailto:hello@greypants.studio"
						className="inline-flex h-12 items-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-80"
					>
						hello@greypants.studio
					</a>
					<p className="mt-4 text-sm text-muted">{s.responseTime}</p>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-t border-border bg-background px-6 py-20">
				<div className="mx-auto max-w-2xl">
					<div className="reveal mb-12">
						<h2 className="text-2xl font-bold tracking-tight">
							{s.faqTitle}
						</h2>
					</div>

					<div className="space-y-10">
						{s.faqs.map((faq, i) => (
							<div key={i} className="reveal">
								<h3 className="mb-2 text-lg font-semibold">
									{faq.q}
								</h3>
								<p className="text-muted">{faq.a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border bg-foreground px-6 py-8 text-background">
				<div className="reveal mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
					<Link
						href="/"
						className="text-sm font-medium text-background/70 transition-colors hover:text-background"
					>
						GreyPants Studio
					</Link>
					<div className="flex gap-4">
						<a
							href="mailto:hello@greypants.studio"
							className="text-sm text-background/50 transition-colors hover:text-background"
						>
							hello@greypants.studio
						</a>
						<span className="text-background/30">|</span>
						<a
							href="https://rounded-hub-165.notion.site/FeedCam-Privacy-Policy-3164fe238ec3802ea083d536762ed7c4"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-background/50 transition-colors hover:text-background"
						>
							{s.privacyPolicy}
						</a>
					</div>
					<div className="mt-2 flex gap-3">
						<button
							onClick={() => setLocale("en")}
							className={`text-sm transition-colors ${locale === "en" ? "text-background font-medium" : "text-background/40 hover:text-background/70"}`}
						>
							English
						</button>
						<span className="text-background/30">|</span>
						<button
							onClick={() => setLocale("tr")}
							className={`text-sm transition-colors ${locale === "tr" ? "text-background font-medium" : "text-background/40 hover:text-background/70"}`}
						>
							Türkçe
						</button>
					</div>
					<p className="text-xs text-background/40">
						&copy; {new Date().getFullYear()} GreyPants Studio
					</p>
				</div>
			</footer>
		</div>
	);
}
