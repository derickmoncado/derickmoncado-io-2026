"use client";

import { type KeyboardEvent, type ReactNode, useId, useState } from "react";

import styles from "./page.module.scss";

type TemplateView = "junior" | "mid-senior";

type TemplateViewSwitchProps = {
	junior: ReactNode;
	midSenior: ReactNode;
};

const views: Array<{ id: TemplateView; label: string }> = [
	{ id: "junior", label: "Junior" },
	{ id: "mid-senior", label: "Mid / Senior" },
];

export default function TemplateViewSwitch({ junior, midSenior }: TemplateViewSwitchProps) {
	const [activeView, setActiveView] = useState<TemplateView>("junior");
	const switchId = useId();
	const activeViewIndex = views.findIndex((view) => view.id === activeView);

	const activateView = (view: TemplateView, shouldFocus = false) => {
		setActiveView(view);

		if (shouldFocus) {
			window.requestAnimationFrame(() => document.getElementById(`${switchId}-${view}-tab`)?.focus());
		}
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
			return;
		}

		event.preventDefault();

		if (event.key === "Home") {
			activateView(views[0].id, true);
			return;
		}

		if (event.key === "End") {
			activateView(views[views.length - 1].id, true);
			return;
		}

		const direction = event.key === "ArrowRight" ? 1 : -1;
		const nextIndex = (activeViewIndex + direction + views.length) % views.length;
		activateView(views[nextIndex].id, true);
	};

	return (
		<div className={styles["template-downloads__view"]}>
			<div className={styles["template-downloads__switch"]} role="tablist" aria-label="Template downloads by experience level" onKeyDown={handleKeyDown}>
				<div className={styles["template-downloads__switch__indicator"]} data-active-view={activeView} aria-hidden="true" />
				{views.map((view) => {
					const isActive = activeView === view.id;
					const panelId = `${switchId}-${view.id}-panel`;
					const tabId = `${switchId}-${view.id}-tab`;

					return (
						<button key={view.id} id={tabId} type="button" role="tab" aria-selected={isActive} aria-controls={panelId} tabIndex={isActive ? 0 : -1} className={styles["template-downloads__switch__button"]} onClick={() => activateView(view.id)}>
							{view.label}
						</button>
					);
				})}
			</div>

			<div id={`${switchId}-junior-panel`} role="tabpanel" aria-labelledby={`${switchId}-junior-tab`} hidden={activeView !== "junior"}>
				{junior}
			</div>

			<div id={`${switchId}-mid-senior-panel`} role="tabpanel" aria-labelledby={`${switchId}-mid-senior-tab`} hidden={activeView !== "mid-senior"}>
				{midSenior}
			</div>
		</div>
	);
}
