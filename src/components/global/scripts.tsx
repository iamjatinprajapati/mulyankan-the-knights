import Script from "next/script";

const Scripts = () => {
  return (
    <>
      <Script src="/assets/novena/plugins/jquery/jquery.js" />
      <Script src="/assets/novena/plugins/bootstrap/js/popper.js" />
      <Script src="/assets/novena/plugins/bootstrap/js/bootstrap.min.js" />
    </>
  );
};

export default Scripts;
