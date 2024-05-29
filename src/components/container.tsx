type LayoutProps = {
  children: React.ReactNode;
};

const Container = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
};

export default Container;
