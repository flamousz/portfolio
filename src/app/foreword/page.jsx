"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/foreword.module.css";
import DescriptionForeword from "./components/DescriptionForeword";
import NameForeword from "./components/NameForeword";
import TitleForeword from "./components/TitleForeword";
import ring from '../../../public/ring.svg'

export default function Foreword() {
	const [timer, setTimer] = useState(null);
	const [isPressing, setIsPressing] = useState(false);
	const router = useRouter();

	const handleMouseDown = () => {
		const timerId = setTimeout(() => {
			executeFunc();
		}, 2000);
		setIsPressing(true);
		setTimer(timerId);
	};

	const handleMouseUp = () => {
		if (timer) {
			clearTimeout(timer);
			setTimer(null);
			setIsPressing(false);
		}
	};

	const executeFunc = () => {
		router.push("/");
	};

	useEffect(() => {
		document.addEventListener("mouseup", handleMouseUp);
		document.addEventListener("mousedown", handleMouseDown);

		return () => {
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("mousedown", handleMouseDown);
		};
	}, []);

	return (
		<main className={`${styles.main} ${isPressing ? styles.active_cursor : ''}`}>
			<NameForeword />
			<TitleForeword />
			<DescriptionForeword />
			<p title='click me'>Foreword.</p>
		</main>
	);
}
