import Image from "next/image";
type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center ml-2 flex leading-6 mt-2">
      <ul className="ml-2 flex justify-center items-center mx-auto w-full rounded-3xl">
        {categories.map((category) => (
          <li
            className={`mx-2 cursor-pointer text-base ${
              category === selected &&
              "text-blue_color selection:bg-brown_color"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
