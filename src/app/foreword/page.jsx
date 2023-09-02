import DescriptionForeword from "./components/DescriptionForeword";
import NameForeword from "./components/NameForeword";
import TitleForeword from "./components/TitleForeword";

export default function Foreword() {
	return (
		<>
			<TitleForeword />
			<NameForeword />
            <DescriptionForeword/>
		</>
	);
}
