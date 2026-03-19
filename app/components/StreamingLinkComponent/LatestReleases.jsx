import Image from "next/image";
import Link from "next/link";

const releases = [
  {
    id: 1,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "/YouTube.png",
    image: "/Fademoon.jpeg",
    href: "https://youtu.be/skhuAY560BI",
  },
  {
    id: 2,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "/Spotify.png",
    image: "/Fademoon.jpeg",
    href: "https://open.spotify.com/track/1HboTUIhYhkrwLrJ9twY88",
  },
  {
    id: 3,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "/Apple-Music.png",
    image: "/Fademoon.jpeg",
    href: "https://music.apple.com/in/album/fade-moon/1881104654",
  },
  {
    id: 4,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "/Yt-Music.png",
    image: "/Fademoon.jpeg",
    href: "https://music.youtube.com/watch?v=4bz7oF5Bg5c&si=H3lE_OoC_1TEx6YR",
  },
];

const LatestRelease = () => {
  return (
    <section className="latest-release" aria-labelledby="latest-release-heading">
      <h2 id="latest-release-heading" className="sr-only">
        Latest Release
      </h2>

      <ul className="release-list">
        {releases.map((item, index) => (
          <li key={item.id}>
            <Link href={item.href} className="release-card">
            <div className="image-title">
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="song-logo"
                priority={index === 0} 
              />
              <div className="title-artist">
                <p className="release-title">{item.title}</p>
                <p className="artist-name"> {item.artist}</p>
              </div>
            </div>
            <Image
              src={item.platform}
              alt={item.title}
              width={0} 
              height={50}
              className="song-logo"
              style={{ width: "auto", height: "30px" }}
              priority={index === 0}
            />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestRelease;