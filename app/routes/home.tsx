import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { ArrowRight } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Meow Meow Meow' },
    { name: 'description', content: 'Meow Meow Meow' },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 flex flex-col items-center justify-center text-center flex-1">
        <Link
          className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-4 py-2.5 flex items-center gap-2"
          to="/docs"
        >
          Meow Meow <ArrowRight size={16}/>
        </Link>
      </div>
    </HomeLayout>
  );
}
