// import '@/styles/globals.css'
import "@assets/novena/plugins/bootstrap/css/bootstrap.min.css";
import "@assets/novena/plugins/icofont/icofont.min.css";
import "@assets/novena/plugins/slick-carousel/slick/slick.css";
import "@assets/novena/plugins/slick-carousel/slick/slick-theme.css";
import "@assets/novena/css/style.css";

import type { AppProps } from "next/app";
import { NextPageWithLayout } from "@/library/types";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/default-layout";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getDefaultLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getDefaultLayout;
  return getLayout(<Component {...pageProps} />);
}
