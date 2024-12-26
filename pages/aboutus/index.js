import Link from "next/link";
const AboutusPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Link href="/aboutus/1">Yash</Link>
      <br />
      <Link href="/aboutus/2">Vaibhav</Link>
      <br />
      <Link href="/aboutus/3">Suresh</Link>
      <br />
    </div>
  );
};

export default AboutusPage;
