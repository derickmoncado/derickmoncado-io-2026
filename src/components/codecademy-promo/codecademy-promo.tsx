import Image from "next/image";
import Link from "next/link";

import CodecademyLogo from "../../../public/images/codecademy-logo.jpg";
import styles from "./codecademy-promo.module.scss";

type CodecademyPromoProps = {
	className?: string;
	priority?: boolean;
};

export default function CodecademyPromo({ className, priority = false }: CodecademyPromoProps) {
	const classNames = [styles["codecademy-promo"], className].filter(Boolean).join(" ");

	return (
		<div className={classNames}>
			<p>Learn to code with</p>
			<Link href="https://www.pntra.com/t/8-12462-377154-213588" target="_blank" rel="noopener noreferrer">
				<Image src={CodecademyLogo} alt="Codecademy" priority={priority} />
			</Link>
			<p>Click for 50% OFF of all plans!</p>
		</div>
	);
}
