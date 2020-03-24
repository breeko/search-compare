import React, {useContext} from "react";
import { ThemeProvider, ThemeContext } from '../context/AppContext';
import Layout from '../components/Layout';

// const defaultTheme = "white";

// const ThemeContext = React.createContext(defaultTheme);

// type Props = {
//   children: React.ReactNode;
// };

// export const ThemeProvider = ({ children }: Props) => {
//   const [theme, setTheme] = React.useState(defaultTheme);

//   React.useEffect(() => {
//     // We'd get the theme from a web API / local storage in a real app
//     // We've hardcoded the theme in our example
//     const currentTheme = "lightblue";
//     setTheme(currentTheme);
//   }, []);

//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };

const AboutX = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <Layout>
        <div style={{ backgroundColor: theme }}>Hello!</div>
        <Header/>
    </Layout>
  );
}

const Header = () => {
  const theme = useContext(ThemeContext);
  React.useEffect(() => console.log(theme))
  return <div><div style={{ backgroundColor: theme }}>Hello!</div></div>
};

export default AboutX