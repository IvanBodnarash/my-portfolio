import { skills } from "@/utils/skills";

let chunkSize = 5;
let chunks = [];

for (let i = 0; i < skills.length; i += chunkSize) {
  let chunk = [];

  for (let j = i; j < i + chunkSize && j < skills.length; j++) {
    chunk.push(skills[j]);
  }

  chunks.push(chunk);
}

export default function ListItems() {
  return (
    <div className="flex flex-row lg:w-4/5 w-3/4 justify-between">
      {chunks.map((list) => (
        <ul key={list}>
          {list.map((item) => (
            <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-0 before:h-0 before:border-l-[5px] before:border-t-[5px] before:border-b-[5px] before:border-solid before:border-l-portfolio-color-6 before:border-t-transparent before:border-b-transparent">
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
