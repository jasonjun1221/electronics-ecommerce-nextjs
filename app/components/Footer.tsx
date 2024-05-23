import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://www.svgrepo.com/show/303114/facebook-3-logo.svg",
    alt: "facebook",
  },
  {
    src: "https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg",
    alt: "instagram",
  },
  {
    src: "https://www.svgrepo.com/show/94698/github.svg",
    alt: "github",
  },
];

const titles = [
  {
    title: "About",
    links: ["Company", "Community", "Careers"],
  },
  {
    title: "Blog",
    links: ["Tech", "Music", "Videos"],
  },
  {
    title: "Products",
    links: ["Mobile Phones", "Laptops", "Cameras"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-10 flex p-10">
        <div className="mx-6 w-2/5">
          <div className="px-6">
            <Link href="/">
              <Image className="h-7 w-auto" src="/zappify-logo.png" alt="Zappify" width={100} height={32} />
            </Link>

            <p className="my-7 max-w-sm text-gray-500">
              Zappify is a platform that sells the latest gadgets and electronics. We provide the best quality products.
            </p>

            <div className="flex gap-4 hover:cursor-pointer">
              {images.map((image) => (
                <Image key={image.alt} src={image.src} alt={image.alt} width={25} height={25} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 flex-1">
          <div className="grid grid-cols-4 gap-6">
            {titles.map((title) => (
              <div key={title.title}>
                <h3 className="text-md font-semibold uppercase text-gray-700">{title.title}</h3>

                <div className="mt-2 flex flex-col items-start space-y-2">
                  {title.links.map((link) => (
                    <span key={link} className="text-sm text-gray-600 hover:underline">
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-md font-semibold uppercase text-gray-700">Contact</h3>
              <span className="mt-2 block text-sm text-gray-600">+65 2665 8965</span>
              <span className="mt-2 block text-sm text-gray-600">zappify@email.com</span>
            </div>
          </div>
        </div>
      </div>

      <p className="my-4 text-center text-gray-500">© 2024 Zapiffy Inc. All rights reserved.</p>
    </footer>
  );
}
