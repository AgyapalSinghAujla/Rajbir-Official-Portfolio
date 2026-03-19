import Header from "./components/HeaderComponent/Header";
import SocialLinks from "./components/SocialLinkComponent/SocialLinks";
import LatestRelease from "./components/StreamingLinkComponent/LatestReleases";


export default function Home() {
  return (
    <>
    <section>
      <Header/>
    </section>
    <section>
      <LatestRelease/>
    </section>
    <section>
      <SocialLinks/>
    </section>
    </>
  );
}
