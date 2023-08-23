
export const metadata = {
    title: 'about',
    description: 'about me page'
}

const AboutLayout = ({ children }) => {
	return (
		<html lang='eng'>
			<body>{children}</body>
		</html>
	);
};

export default AboutLayout;
