"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleContext";

export default function Home() {
	useReveal();
	const { locale, setLocale, t } = useLocale();
	const s = t.home;

	return (
		<div className="grain noise relative min-h-screen">
			{/* Hero */}
			<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/hero-bg.jpg')" }}
				/>
				<div className="absolute inset-0 bg-background/75" />
				<div className="relative z-10 mx-auto max-w-3xl">
					<Image
						src="/logo.png"
						alt="GreyPants Studio"
						width={200}
						height={20}
						className="fade-in mx-auto mb-8"
						priority
					/>
					<p className="fade-in fade-in-delay-1 mb-6 text-sm font-medium tracking-widest uppercase text-muted">
						{s.tagline}
					</p>
					<h1 className="fade-in fade-in-delay-2 mb-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
						{s.heroTitle1}
						<br />
						{s.heroTitle2}
					</h1>
					<p className="fade-in fade-in-delay-3 animate-float mx-auto mb-12 max-w-md text-lg text-muted">
						{s.heroSubtitle}
					</p>
				</div>
			</section>

			{/* About */}
			<section className="border-t border-border bg-background px-6 py-32">
				<div className="reveal mx-auto max-w-2xl">
					<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
						{s.aboutLabel}
					</p>
					<h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
						{s.aboutTitle1}
						<br />
						{s.aboutTitle2}
						<br />
						{s.aboutTitle3}
					</h2>
					<div className="space-y-6 text-lg leading-relaxed text-muted">
						<p>{s.aboutP1}</p>
						<p>{s.aboutP2}</p>
						<p>{s.aboutP3}</p>
					</div>
				</div>
			</section>

			{/* What We Build */}
			<section className="border-t border-border bg-surface px-6 py-32">
				<div className="mx-auto max-w-4xl">
					<div className="reveal mb-16">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.buildLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.buildTitle1}
							<br />
							{s.buildTitle2}
						</h2>
					</div>

					<div className="grid gap-16 md:grid-cols-2">
						<div className="reveal">
							<h3 className="mb-6 text-xl font-semibold">
								{s.weCreate}
							</h3>
							<ul className="space-y-3 text-muted">
								{s.createItems.map((item, i) => (
									<li
										key={i}
										className="reveal-child flex items-start gap-3"
									>
										<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="reveal">
							<h3 className="mb-6 text-xl font-semibold">
								{s.weCare}
							</h3>
							<ul className="space-y-3 text-muted">
								{s.careItems.map((item, i) => (
									<li
										key={i}
										className="reveal-child flex items-start gap-3"
									>
										<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="reveal mt-16 space-y-1 text-lg font-medium">
						<p>{s.buildFooter1}</p>
						<p>{s.buildFooter2}</p>
						<p className="text-muted">{s.buildFooter3}</p>
					</div>
				</div>
			</section>

			{/* Philosophy */}
			<section className="border-t border-border bg-background px-6 py-32">
				<div className="mx-auto max-w-2xl">
					<div className="reveal">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.approachLabel}
						</p>
						<div className="mb-12 space-y-1 text-3xl font-bold leading-snug tracking-tight md:text-4xl">
							<p className="reveal-child">{s.approach1}</p>
							<p className="reveal-child">{s.approach2}</p>
							<p className="reveal-child">{s.approach3}</p>
						</div>
					</div>

					<div className="reveal space-y-6 text-lg leading-relaxed text-muted">
						<div className="space-y-1">
							<p className="reveal-child">{s.philosophy1}</p>
							<p className="reveal-child">{s.philosophy2}</p>
							<p className="reveal-child">{s.philosophy3}</p>
						</div>
						<div className="space-y-1">
							<p>{s.philosophy4}</p>
							<p>{s.philosophy5}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Products */}
			<section
				id="work"
				className="border-t border-border bg-surface px-6 py-32"
			>
				<div className="mx-auto max-w-4xl">
					<div className="reveal mb-16">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.workLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.workTitle}
						</h2>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						<Link
							href="/projects/feedcam"
							className="reveal group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm"
						>
							<div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300">
								<Image
									src="/AppIcon.appiconset/icon-ios-1024x1024.png"
									alt="FeedCam"
									width={128}
									height={128}
									className="rounded-3xl"
								/>
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								FeedCam
								<span className="ml-2 inline-block text-sm font-normal text-muted transition-transform group-hover:translate-x-1">
									&rarr;
								</span>
							</h3>
							<p className="text-muted">{s.feedcamDesc}</p>
						</Link>

						<a
							href="https://2048trouble.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="reveal group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm"
						>
							<div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-200">
								<span className="text-4xl font-bold text-orange-300">
									2048
								</span>
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								2048 Trouble
								<span className="ml-2 inline-block text-sm font-normal text-muted transition-transform group-hover:translate-x-1">
									↗
								</span>
							</h3>
							<p className="text-muted">{s.troubleDesc}</p>
							<p className="mt-2 text-xs text-muted/70">
								{s.troubleSoon}
							</p>
						</a>
					</div>
				</div>
			</section>

			{/* Closing */}
			<section className="border-t border-border bg-background px-6 py-32 text-center">
				<div className="reveal mx-auto max-w-xl">
					<p className="text-2xl font-medium leading-relaxed md:text-3xl">
						{s.closingTitle}
						<br />
						<span className="text-muted">{s.closingSubtitle}</span>
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border bg-foreground px-6 py-8 text-background">
				<div className="reveal mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
					<Image
						src="/logo.png"
						alt="GreyPants Studio"
						width={400}
						height={80}
					/>
					<a
						href="mailto:hello@greypants.studio"
						className="text-sm text-background/50 transition-colors hover:text-background"
					>
						hello@greypants.studio
					</a>
					<div className="flex gap-6">
						<a
							href="https://greypants.studio"
							className="text-sm text-background/50 transition-colors hover:text-background"
							target="_blank"
							rel="noopener noreferrer"
						>
							greypants.studio
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
