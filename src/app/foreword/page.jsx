import styles from "../styles/foreword.module.css";
import DescriptionForeword from "./components/DescriptionForeword";
import NameForeword from "./components/NameForeword";
import TitleForeword from "./components/TitleForeword";

export default function Foreword() {
	return (
		<main className={styles.main}>
			<NameForeword />
			<TitleForeword />
			<DescriptionForeword />
			<p>foreword.</p>
		</main>
	);
}
