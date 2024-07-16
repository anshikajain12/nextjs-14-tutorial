import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Products</Link>
    </div>
      <h1>
        Welcome Home!!
      </h1>
    </>
  );
}
