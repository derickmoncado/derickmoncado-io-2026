"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

import styles from "./page.module.scss";

type TemplateImagePreviewProps = {
	src: string;
	alt: string;
	thumbnailWidth: number;
	thumbnailHeight: number;
	previewWidth: number;
	previewHeight: number;
};

export default function TemplateImagePreview({ src, alt, thumbnailWidth, thumbnailHeight, previewWidth, previewHeight }: TemplateImagePreviewProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const dialog = dialogRef.current;

		if (dialog && !dialog.open) {
			dialog.showModal();
		}
	}, [isOpen]);

	const closeModal = () => {
		if (isClosing) {
			return;
		}

		const dialog = dialogRef.current;

		setIsClosing(true);

		window.setTimeout(() => {
			if (dialog?.open) {
				dialog.close();
			} else {
				setIsOpen(false);
			}

			setIsClosing(false);
		}, 180);
	};

	return (
		<>
			<button type="button" className={styles["template-downloads__preview-trigger"]} onClick={() => setIsOpen(true)} aria-label={`Open larger ${alt.toLowerCase()}`}>
				<Image src={src} alt={alt} width={thumbnailWidth} height={thumbnailHeight} />
				<span className={styles["template-downloads__preview-trigger__overlay"]} aria-hidden="true">
					<Maximize2 />
				</span>
			</button>

			{isOpen ? (
				<dialog ref={dialogRef} className={styles["template-downloads__preview-modal"]} data-state={isClosing ? "closing" : "open"} aria-label={alt} onCancel={(event) => {
					event.preventDefault();
					closeModal();
				}} onClose={() => setIsOpen(false)} onClick={(event) => event.currentTarget === event.target && closeModal()}>
					<div className={styles["template-downloads__preview-modal__content"]}>
						<button type="button" className={styles["template-downloads__preview-modal__close"]} onClick={closeModal} aria-label="Close image preview">
							<X />
						</button>
						<Image src={src} alt={alt} width={previewWidth} height={previewHeight} sizes="(width >= 1024px) 70vw, 92vw" priority />
					</div>
				</dialog>
			) : null}
		</>
	);
}
