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
    </section>
  );
};

export default SocialLinks;