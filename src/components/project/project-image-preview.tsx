"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import styles from "./project-image-preview.module.scss";

type ProjectImagePreviewProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export default function ProjectImagePreview({ src, alt, width, height }: ProjectImagePreviewProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const previousOverflow = document.documentElement.style.overflow;
		document.documentElement.style.overflow = "hidden";
		return () => {
			document.documentElement.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return (
		<>
			<button
				type="button"
				className={styles.preview}
				aria-label={`View full-size ${alt}`}
				aria-haspopup="dialog"
				onClick={() => {
					setIsOpen(true);
					dialogRef.current?.showModal();
				}}
			>
				<Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 767px) 90vw, 45vw" priority />
				<span className={styles.preview__label} aria-hidden="true"><Maximize2 /> View full image</span>
			</button>
			<dialog
				ref={dialogRef}
				className={styles.modal}
				aria-label={alt}
				onClose={() => setIsOpen(false)}
				onClick={(event) => {
					if (event.target === event.currentTarget) dialogRef.current?.close();
				}}
			>
				<div className={styles.modal__content}>
					<button type="button" className={styles.modal__close} onClick={() => dialogRef.current?.close()} aria-label="Close image preview"><X /></button>
					{isOpen ? <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 900px, 92vw" priority /> : null}
				</div>
			</dialog>
		</>
	);
}
