import Image from 'next/image';
import Link from 'next/link';

export interface IProject {
  title: string;
  tag: string;
  desc: string;
  img: string;
  url: string;
}

export default function ProjectCard({ data }: { data: IProject }) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <Link href={data.url}>
        
          <Image
            src={data.img}
            alt={data.title}
            width={600}
            height={700}
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        
      </Link>
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          {data.tag}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{data.title}</h2>
      </div>
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{data.desc}</p>
    </div>
  );
}