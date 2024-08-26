import {
  HomeIcon,
  ImagesIcon,
  ListIcon,
  NotepadTextIcon,
  type LucideIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function NavList({ currentPath }: { currentPath: string }) {
  const navList = [
    {
      id: 1,
      icon: ListIcon,
      path: "/works",
    },
    {
      id: 2,
      icon: NotepadTextIcon,
      path: "/notes",
    },
    {
      id: 3,
      icon: ImagesIcon,
      path: "/photos",
    },
  ];

  return (
    <nav className="fixed flex justify-center items-center px-4 py-2 space-x-6 w-fit border-[0.5px] mx-auto right-0 left-0 bottom-4 rounded-full bg-base-5/70 backdrop-blur-md border-base-3 z-50">
      <button
        onClick={() => window.location.replace("/")}
        className={twMerge(
          "p-2",
          currentPath === "/" ? "bg-base-0 rounded-full" : ""
        )}
      >
        <HomeIcon
          className={twMerge(
            "font-bold border-base-0",
            currentPath === "/" ? "text-base-5" : "text-base-0"
          )}
        />
      </button>
      {navList.map((item) => {
        const Icon: LucideIcon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => window.location.replace(item.path)}
            className={twMerge(
              "p-2",
              currentPath.includes(item.path) ? "bg-base-0 rounded-full" : ""
            )}
          >
            <Icon
              size={23}
              className={twMerge(
                "font-bold border-base-0",
                currentPath.includes(item.path) ? "text-base-5" : "text-base-0"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}