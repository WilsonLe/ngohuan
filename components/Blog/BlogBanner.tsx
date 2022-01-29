import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BlogType } from '../../types';

interface Props {
  blogType: BlogType;
}

const BlogBanner: NextPage<Props> = ({ blogType }) => {
  const [bannerText, setBannerText] = useState<string>('');
  useEffect(() => {
    if (blogType === 'personal') {
      setBannerText('Personal Blog');
    } else if (blogType === 'research') {
      setBannerText('Research Blog');
    }
  }, [blogType]);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:p-6 lg:p-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="object-cover"
              src="/personal-blog-banner.jpeg"
              layout="fill"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-indigo-200">{bannerText}</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogBanner;
