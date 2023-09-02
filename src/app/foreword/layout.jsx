export const metadata = {
	title: "foreword",
	description: "page about foreword",
};

export default function ForewordLayout({ children }) {
	return (
		<html lang='eng'>
			<body>{children}</body>
		</html>
	);
}
