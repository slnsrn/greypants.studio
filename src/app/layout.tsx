import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleContext";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	title: "GreyPants Studio",
	description:
		"Independent software studio crafting clean, useful digital products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<LocaleProvider>{children}</LocaleProvider>
			</body>
		</html>
	);
}
