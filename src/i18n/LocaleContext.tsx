"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

type LocaleContextType = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
};

const LocaleContext = createContext<LocaleContextType>({
	locale: "en",
	setLocale: () => {},
	t: translations.en,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("en");

	useEffect(() => {
		const saved = localStorage.getItem("locale") as Locale | null;
		if (saved && (saved === "en" || saved === "tr")) {
			setLocaleState(saved);
		} else if (navigator.language.toLowerCase().startsWith("tr")) {
			setLocaleState("tr");
		}
	}, []);

	const setLocale = (l: Locale) => {
		setLocaleState(l);
		localStorage.setItem("locale", l);
	};

	return (
		<LocaleContext.Provider
			value={{ locale, setLocale, t: translations[locale] }}
		>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	return useContext(LocaleContext);
}
