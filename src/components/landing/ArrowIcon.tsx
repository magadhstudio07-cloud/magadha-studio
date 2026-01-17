const ArrowIcon = ({ inverted = false }: { inverted?: boolean }) => {
  const bgClass = inverted 
    ? "bg-zinc-50 dark:bg-zinc-900" 
    : "bg-zinc-900 dark:bg-zinc-50";
  
  return (
    <div className="group relative h-4 w-4 overflow-hidden">
      <div className="grid h-full w-full grid-cols-5 grid-rows-5">
        <div className={`col-start-2 row-start-1 h-full w-full group-hover:animate-pulse ${bgClass}`} />
        <div className={`col-start-3 row-start-2 h-full w-full group-hover:animate-pulse ${bgClass}`} />
        <div className={`col-start-4 row-start-3 h-full w-full group-hover:animate-pulse ${bgClass}`} />
        <div className={`col-start-3 row-start-4 h-full w-full group-hover:animate-pulse ${bgClass}`} />
        <div className={`col-start-2 row-start-5 h-full w-full group-hover:animate-pulse ${bgClass}`} />
      </div>
    </div>
  );
};

export default ArrowIcon;
