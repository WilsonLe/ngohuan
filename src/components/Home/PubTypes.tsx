import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import config from '../../config';

const pubs = config.homePage.publications.cards;

export default function PubTypes() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);
  useEffect(() => {
    if (cardRef.current) {
      setImageWidth(cardRef.current.clientWidth);
    }
  }, [cardRef]);

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {config.homePage.publications.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {config.homePage.publications.subtitle}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {pubs.map((pub) => (
            <Link key={pub.title} href={pub.href} passHref>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="h-48 w-full object-cover" ref={cardRef}>
                    <Image
                      className="h-48 w-full object-cover"
                      src={pub.imageUrl}
                      height={192}
                      width={imageWidth}
                      alt={pub.imageAlt}
                    />
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {pub.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {pub.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
