import { PrismicRichText} from "@prismicio/react";
import { Header } from "./Header";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <footer>
        {/* <img className="footer-logo" src={'/footer-logo.svg'}/> */}
        <PrismicRichText field={settings.data.footer}/>
      </footer>
    </div>
  );
};
