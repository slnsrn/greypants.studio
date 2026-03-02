"use client";

import { useEffect } from "react";

export function useReveal() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");

						// Stagger children with .reveal-child class
						const children = entry.target.querySelectorAll(".reveal-child");
						for (let i = 0; i < children.length; i++) {
							const child = children[i] as HTMLElement;
							child.style.transitionDelay = `${i * 100}ms`;
							child.classList.add("visible");
						}
					}
				}
			},
			{ threshold: 0.1 },
		);

		const elements = document.querySelectorAll(".reveal");
		for (const el of elements) {
			observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);
}
