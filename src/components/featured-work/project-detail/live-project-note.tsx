"use client";

import { Info } from "lucide-react";
import { useId, useState } from "react";
import styles from "./project-detail.module.scss";

export default function LiveProjectNote() {
	const tooltipId = useId();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={styles["project-detail__live-note"]}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			onFocus={() => setIsOpen(true)}
			onBlur={() => setIsOpen(false)}
			onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false); }}
		>
			<button type="button" aria-label="About the live project" aria-describedby={tooltipId} onClick={() => setIsOpen(true)}>
				<Info aria-hidden="true" />
			</button>
			<span id={tooltipId} role="tooltip" className={styles["project-detail__live-tooltip"]} data-open={isOpen}>
				Note: contents of live site my differ than what is showcased here
			</span>
		</div>
	);
}
