import Image from 'next/image';
import Link from 'next/link';

export interface ISkills {
  title: string;
  tag: string;
  desc: string;
  img: string;
  link: string;
}

export default function ProjectCard({ data }: { data: ISkills }) {
  return (
    <Link href={data.link} legacyBehavior>
      <a className="group relative block h-64 sm:h-80">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        <div className="relative flex h-full transform items-end border-2 border-[var(--primary-color)] group-hover:border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <Image src={data.img} alt={data.title} width={500} height={500} className="w-[4rem]" />
            <h2 className="mt-4 text-xl font-medium uppercase text-[var(--primary-color)] sm:text-3xl">{data.title}</h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-3xl">{data.title}</h3>
            <p className="mt-4 text-sm sm:text-lg">{data.desc}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
