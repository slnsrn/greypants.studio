"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleContext";

export default function FeedCamPage() {
	useReveal();
	const { locale, setLocale, t } = useLocale();
	const s = t.feedcam;

	return (
		<div className="grain noise relative min-h-screen">
			{/* Nav */}
			<nav className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
					<Link
						href="/"
						className="text-sm font-medium text-muted transition-colors hover:text-foreground"
					>
						&larr; GreyPants Studio
					</Link>
					<div className="flex gap-3">
						<a
							href="#download"
							className="inline-flex h-9 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-80"
						>
							{s.download}
						</a>
					</div>
				</div>
			</nav>

			{/* Hero */}
			<section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
				<div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-background to-background" />
				<div className="relative z-10 mx-auto max-w-3xl">
					<div className="fade-in mx-auto mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.5rem] shadow-lg">
						<Image
							src="/AppIcon.appiconset/icon-ios-1024x1024.png"
							alt="FeedCam"
							width={96}
							height={96}
							priority
						/>
					</div>
					<h1 className="fade-in fade-in-delay-1 mb-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
						{s.heroTitle}
					</h1>
					<p className="fade-in fade-in-delay-2 mb-6 text-sm font-medium tracking-widest uppercase text-muted">
						{s.heroTagline}
					</p>
					<p className="fade-in fade-in-delay-3 mx-auto mb-12 max-w-lg text-lg leading-relaxed text-muted">
						{s.heroDesc}
					</p>
					<div className="fade-in fade-in-delay-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="#download"
							className="inline-flex h-12 items-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-80"
						>
							{s.getApp}
						</a>
						<a
							href="#features"
							className="inline-flex h-12 items-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
						>
							{s.seeFeatures}
						</a>
					</div>
				</div>
			</section>

			{/* Screenshots */}
			<section className="border-t border-border bg-surface px-6 py-32">
				<div className="mx-auto max-w-5xl">
					<div className="reveal mb-16 text-center">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.screenshotsLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.screenshotsTitle}
						</h2>
					</div>
					<div className="reveal flex flex-col items-center justify-center gap-8 md:flex-row">
						<div className="w-56 overflow-hidden rounded-3xl shadow-2xl">
							<Image
								src="/Apple iPhone 14 Plus (1284x2778)/Apple iPhone 14 Plus Screenshot 2.png"
								alt={s.screenshotAlt1}
								width={1284}
								height={2778}
								className="w-full"
							/>
						</div>
						<div className="-mt-4 w-64 overflow-hidden rounded-3xl shadow-2xl md:mt-0 md:-translate-y-6">
							<Image
								src="/Apple iPhone 14 Plus (1284x2778)/Apple iPhone 14 Plus Screenshot 1.png"
								alt={s.screenshotAlt2}
								width={1284}
								height={2778}
								className="w-full"
							/>
						</div>
						<div className="w-56 overflow-hidden rounded-3xl shadow-2xl">
							<Image
								src="/Apple iPhone 14 Plus (1284x2778)/Apple iPhone 14 Plus Screenshot 3.png"
								alt={s.screenshotAlt3}
								width={1284}
								height={2778}
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section
				id="features"
				className="border-t border-border bg-background px-6 py-32"
			>
				<div className="mx-auto max-w-4xl">
					<div className="reveal mb-16">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.featuresLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.featuresTitle1}
							<br />
							{s.featuresTitle2}
						</h2>
					</div>

					<div className="grid gap-12 md:grid-cols-2">
						{s.features.map((feature, i) => (
							<div key={i} className="reveal">
								<h3 className="mb-3 text-lg font-semibold">
									{feature.title}
								</h3>
								<p className="text-muted">{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How it works */}
			<section className="border-t border-border bg-surface px-6 py-32">
				<div className="mx-auto max-w-2xl">
					<div className="reveal mb-16">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.howLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.howTitle1}
							<br />
							{s.howTitle2}
						</h2>
					</div>

					<div className="space-y-12">
						{s.steps.map((step, i) => (
							<div
								key={i}
								className="reveal flex items-start gap-6"
							>
								<span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
									{i + 1}
								</span>
								<div>
									<h3 className="mb-1 text-lg font-semibold">
										{step.title}
									</h3>
									<p className="text-muted">{step.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section className="border-t border-border bg-background px-6 py-32">
				<div className="mx-auto max-w-4xl">
					<div className="reveal mb-16 text-center">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.pricingLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.pricingTitle1}
							<br />
							{s.pricingTitle2}
						</h2>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						<div className="reveal rounded-2xl border border-border bg-background p-8">
							<h3 className="mb-1 text-lg font-semibold">
								{s.free}
							</h3>
							<p className="mb-6 text-sm text-muted">
								{s.freeTag}
							</p>
							<p className="mb-6 text-3xl font-bold">
								$0
								<span className="text-base font-normal text-muted">
									/mo
								</span>
							</p>
							<ul className="space-y-3 text-sm text-muted">
								{s.freeFeatures.map((f, i) => (
									<li
										key={i}
										className="flex items-start gap-2"
									>
										<span className="mt-0.5 text-foreground">
											&#10003;
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>

						<div className="reveal rounded-2xl border-2 border-foreground bg-background p-8">
							<div className="mb-1 flex items-center gap-2">
								<h3 className="text-lg font-semibold">
									{s.pro}
								</h3>
								<span className="rounded-full bg-foreground px-2 py-0.5 text-xs font-medium text-background">
									{s.popular}
								</span>
							</div>
							<p className="mb-6 text-sm text-muted">
								{s.proTag}
							</p>
							<p className="mb-6 text-3xl font-bold">
								$4.99
								<span className="text-base font-normal text-muted">
									/mo
								</span>
							</p>
							<ul className="space-y-3 text-sm text-muted">
								{s.proFeatures.map((f, i) => (
									<li
										key={i}
										className="flex items-start gap-2"
									>
										<span className="mt-0.5 text-foreground">
											&#10003;
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>

						<div className="reveal rounded-2xl border border-border bg-background p-8">
							<h3 className="mb-1 text-lg font-semibold">
								{s.proPlus}
							</h3>
							<p className="mb-6 text-sm text-muted">
								{s.proPlusTag}
							</p>
							<p className="mb-6 text-3xl font-bold">
								$9.99
								<span className="text-base font-normal text-muted">
									/mo
								</span>
							</p>
							<ul className="space-y-3 text-sm text-muted">
								{s.proPlusFeatures.map((f, i) => (
									<li
										key={i}
										className="flex items-start gap-2"
									>
										<span className="mt-0.5 text-foreground">
											&#10003;
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Who it's for */}
			<section className="border-t border-border bg-surface px-6 py-32">
				<div className="mx-auto max-w-2xl">
					<div className="reveal mb-12">
						<p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
							{s.builtForLabel}
						</p>
						<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
							{s.builtForTitle1}
							<br />
							{s.builtForTitle2}
						</h2>
					</div>
					<div className="reveal space-y-4 text-lg text-muted">
						{s.builtForItems.map((item, i) => (
							<div
								key={i}
								className="reveal-child flex items-start gap-3"
							>
								<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Download CTA */}
			<section
				id="download"
				className="border-t border-border bg-background px-6 py-32 text-center"
			>
				<div className="reveal mx-auto max-w-xl">
					<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
						<Image
							src="/AppIcon.appiconset/icon-ios-1024x1024.png"
							alt="FeedCam"
							width={80}
							height={80}
						/>
					</div>
					<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
						{s.ctaTitle}
					</h2>
					<p className="mb-10 text-lg text-muted">{s.ctaDesc}</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="#"
							className="inline-flex h-14 items-center gap-3 rounded-xl bg-foreground px-6 text-background transition-opacity hover:opacity-80"
						>
							<svg
								className="h-7 w-7"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
							</svg>
							<div className="text-left">
								<div className="text-[10px] leading-none opacity-70">
									{s.appStoreLabel}
								</div>
								<div className="text-lg font-semibold leading-tight">
									{s.appStore}
								</div>
							</div>
						</a>
						<a
							href="#"
							className="inline-flex h-14 items-center gap-3 rounded-xl bg-foreground px-6 text-background transition-opacity hover:opacity-80"
						>
							<svg
								className="h-7 w-7"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.192zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
							</svg>
							<div className="text-left">
								<div className="text-[10px] leading-none opacity-70">
									{s.googlePlayLabel}
								</div>
								<div className="text-lg font-semibold leading-tight">
									{s.googlePlay}
								</div>
							</div>
						</a>
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
						<Link
							href="/projects/feedcam/support"
							className="text-sm text-background/50 transition-colors hover:text-background"
						>
							{s.support}
						</Link>
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
