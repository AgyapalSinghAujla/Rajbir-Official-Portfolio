import Image from "next/image";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: "/Instagram.png",
    href: "https://www.instagram.com/rajbiraujla_",
  },
  {
    id: 2,
    name: "Facebook",
    icon: "/Facebook.png",
    href: "https://www.facebook.com/RajbirAujlaOfficial",
  },
  {
    id: 3,
    name: "YouTube",
    icon: "/YouTube.png",
    href: "https://www.youtube.com/@RajbirAujlaOfficial",
  },
  {
    id: 4,
    name: "Spotify",
    icon: "/Spotify.png",
    href: "https://open.spotify.com/artist/7uW475asAgtNFUZOvx1Zzm",
  },
  {
    id: 5,
    name: "Apple Music",
    icon: "/Apple-Music.png",
    href: "https://music.apple.com/us/artist/rajbir-aujla/1840954478",
  },
];

const SocialLinks = () => {
  return (
    <section className="social-link" aria-label="Follow us on social media">
      <ul className="social-link-list">
        {socialLinks.map((item, index) => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
              aria-label={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={32}
                height={32}
                className="social-link-logo"
                priority={index === 0}
              />
            </a>
          </li>
        ))}
      </ul>
      <p className="social-description">Connect with us by following on these accounts</p>
    </section>
  );
};

export default SocialLinks;