import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { TetrislyProvider } from "@virtuslab/tetrisly-react";
import main from "./styles/main.css";
import sidebar from "./styles/sidebar.css";


export const meta: MetaFunction = () => [
  { charset: "utf-8", title: "Skyello", viewport: "width=device-width,initial-scale=1" },
];

{/*export const loader = async ({request}: LoaderFunctionArgs) => {
  const {getUser} = await getKindeSession(request);
  const user = await getUser();

  if (user === null) {
    throw redirect("/kinde-auth/login");
  }

  return json({user});
};*/}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: main },
  { rel: "stylesheet", href: sidebar },
];

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
          <TetrislyProvider>
              {/* <Header /> */}
                  <Outlet />
          </TetrislyProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}