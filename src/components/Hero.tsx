import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    background: "#f8f9fa",
    padding: "0 1.5rem",
    boxSizing: "border-box",
    textAlign: "center",
  },
  image: {
    width: "140px",
    height: "140px",
    objectFit: "cover" as const,
    borderRadius: "50%",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    marginBottom: "2rem",
    background: "#e9ecef",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    margin: 0,
    color: "#22223b",
    letterSpacing: "-1px",
  },
  subheading: {
    fontSize: "1.25rem",
    fontWeight: 400,
    color: "#4a4e69",
    margin: "1rem 0 2rem",
    maxWidth: "480px",
    lineHeight: 1.6,
  },
  links: {
    display: "flex",
    gap: "1.25rem",
    justifyContent: "center",
    marginTop: "1rem",
    flexWrap: "wrap" as const,
  },
  link: {
    color: "#22223b",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1rem",
    border: "1px solid #c9ada7",
    borderRadius: "6px",
    padding: "0.5rem 1.25rem",
    background: "#fff",
    transition: "background 0.18s, box-shadow 0.18s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  },
  linkHover: {
    background: "#f2e9e4",
    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
  },
};

function useLinkHover() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const handlers = (idx: number) => ({
    onMouseEnter: () => setHovered(idx),
    onMouseLeave: () => setHovered(null),
  });
  return { hovered, handlers };
}

export const Hero: React.FC = () => {
  const { hovered, handlers } = useLinkHover();

  const links = [
    {
      label: "GitHub",
      url: "https://github.com/",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/",
    },
    {
      label: "Email",
      url: "mailto:your@email.com",
    },
  ];

  return (
    <section style={styles.hero}>
      <img
        src="https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1761493919415-img-profile.png"
        alt="Profile"
        style={styles.image}
        loading="lazy"
      />
      <h1 style={styles.heading}>Hi, I'm Your Name</h1>
      <p style={styles.subheading}>
        I'm a passionate web developer specializing in building fast, accessible, and delightful web experiences. Let's build something great together!
      </p>
      <div style={styles.links}>
        {links.map((link, idx) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={
              hovered === idx
                ? { ...styles.link, ...styles.linkHover }
                : styles.link
            }
            {...handlers(idx)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;