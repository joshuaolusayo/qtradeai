import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from '../../routes';

export default function Navigation(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <aside className="py-6 md:pb-0 md:pt-20 navigatio__n">
      {routes.map((route) => {
        const isActive = route.path === pathname;

        return (
          <Link key={route.path} href={route.path}>
            <a
              className={`txt-purple md:text-white nav-link grid gap-6 grid-cols-8 align-center nav-link py-4 px-5 border-l-4 border-transparent hover:text-white md:hover:border-white md:hover:bg-white md:hover:bg-opacity-20 ${
                isActive ? 'active md:border-white md:bg-white md:bg-opacity-20' : ''
              }`}
            >
              {route.Icon}
              <span className="col-span-6">{route.name}</span>
            </a>
          </Link>
        );
      })}
    </aside>
  );
}
