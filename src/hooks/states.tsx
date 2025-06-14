import { useEffect, useState } from "react";

export function useScrollTop(): number {
	const [scrollTop, setScrollTop] = useState<number>(document.body.scrollTop || document.documentElement.scrollTop || 0);

	useEffect(() => {
		const page = document.querySelector(".page");
		if (!page) return;
		const handleScroll = () => {
			const current = page.scrollTop || document.body.scrollTop || 0;
			setScrollTop(current);
		};

		page.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			page.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollTop;
}
