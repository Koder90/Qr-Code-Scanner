import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <Image
          className="image"
          src="/image-qr-code.png"
          width={350}
          height={400}
        />
        <div className="text">
          <h3>Improve your frontend skills by building projects</h3>
          <p>
            Scan the qr code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}
