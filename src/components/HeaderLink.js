import Link from "next/link";

export default function HeaderLink ({ href, title }){
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-2 text-textColor sm:text-xl rounded md:p-0 hover:text-colorHover"
    >
      {title}
    </Link>
  );
};


