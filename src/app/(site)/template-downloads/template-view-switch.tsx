"use client";

import { type KeyboardEvent, type ReactNode, useId, useState } from "react";

import styles from "./page.module.scss";

type TemplateView = "view-1" | "view-2";

type TemplateViewSwitchProps = {
	viewOne: ReactNode;
	viewTwo: ReactNode;
};

const views: Array<{ id: TemplateView; label: string }> = [
	{ id: "view-1", label: "View 1" },
	{ id: "view-2", label: "View 2" },
];

export default function TemplateViewSwitch({ viewOne, viewTwo }: TemplateViewSwitchProps) {
	const [activeView, setActiveView] = useState<TemplateView>("view-1");
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
			<div className={styles["template-downloads__switch"]} role="tablist" aria-label="Template download views" onKeyDown={handleKeyDown}>
				<div className={styles["template-downloads__switch__indicator"]} data-active-view={activeView} aria-hidden="true" />
				{views.map((view) => {
					const isActive = activeView === view.id;
					const panelId = `${switchId}-${view.id}-panel`;
					const tabId = `${switchId}-${view.id}-tab`;

					return (
						<button
							key={view.id}
							id={tabId}
							type="button"
							role="tab"
							aria-selected={isActive}
							aria-controls={panelId}
							tabIndex={isActive ? 0 : -1}
							className={styles["template-downloads__switch__button"]}
							onClick={() => activateView(view.id)}
						>
							{view.label}
						</button>
					);
				})}
			</div>

			<div
				id={`${switchId}-view-1-panel`}
				role="tabpanel"
				aria-labelledby={`${switchId}-view-1-tab`}
				hidden={activeView !== "view-1"}
			>
				{viewOne}
			</div>

			<div
				id={`${switchId}-view-2-panel`}
				role="tabpanel"
				aria-labelledby={`${switchId}-view-2-tab`}
				hidden={activeView !== "view-2"}
			>
				{viewTwo}
			</div>
		</div>
	);
}
