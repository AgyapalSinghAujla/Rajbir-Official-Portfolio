import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="logoWrapper">
        <Image
          src="/RajbirAujlaOfficialProfile.jpeg" 
          alt="Rajbir Aujla Profile"
          width={120}
          height={120}
          priority
          className="logo"
        />
      </div>
      <p className="subtitle" >INDEPENDENT ARTIST</p>
      <h1 className="title">Rajbir Aujla</h1>
      <p className="tagline">
        Where Words Fail, Music Speaks 🎙️
      </p>
    </header>
  );
};

export default Header;