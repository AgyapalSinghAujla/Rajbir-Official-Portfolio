import Image from "next/image";

const releases = [
  {
    id: 1,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "YouTube",
    platformIcon: "/YouTube.png",
    image: "/Fademoon.jpeg",
    href: "https://youtu.be/skhuAY560BI",
  },
  {
    id: 2,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "Spotify",
    platformIcon: "/Spotify.png",
    image: "/Fademoon.jpeg",
    href: "https://open.spotify.com/track/1HboTUIhYhkrwLrJ9twY88",
  },
  {
    id: 3,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "Apple Music",
    platformIcon: "/Apple-Music.png",
    image: "/Fademoon.jpeg",
    href: "https://music.apple.com/in/album/fade-moon/1881104654",
  },
  {
    id: 4,
    title: "Fade Moon",
    artist: "Rajbir Aujla",
    platform: "YouTube Music",
    platformIcon: "/Yt-Music.png",
    image: "/Fademoon.jpeg",
    href: "https://music.youtube.com/watch?v=4bz7oF5Bg5c&si=H3lE_OoC_1TEx6YR",
  },
];

const LatestRelease = () => {
  return (
    <section
      className="latest-release"
      aria-labelledby="latest-release-heading"
    >
      <h2 id="latest-release-heading" className="sr-only">
        Latest Release
      </h2>

      <ul className="release-list">
        {releases.map((item, index) => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="release-card"
            >
              <div className="image-title">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  priority={index === 0}
                />
                <div className="title-artist">
                  <p className="release-title">{item.title}</p>
                  <p className="artist-name"> {item.artist}</p>
                </div>
              </div>
              <Image
                src={item.platformIcon}
                alt={item.platform}
                width={0}
                height={50}
                style={{ width: "auto", height: "30px" }}
                priority={index === 0}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestRelease;
