import type { V2_MetaFunction } from "@remix-run/react";
import TextInputGen from "../components/TextInputGen";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <TextInputGen />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
