const Layout = (props) => {
  return (
    <main className="bg-stone-100 min-h-screen">
      <section className="flex flex-col gap-8 max-w-screen-md mx-auto justify-center  items-center">
        {props.children}
      </section>
    </main>
  );
};

export default Layout;
