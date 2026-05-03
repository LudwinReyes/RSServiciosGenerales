export default function Loading() {
  return (
    <div className="min-h-screen bg-onyx-black flex flex-col pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex-1">
        <div className="animate-pulse space-y-12">
          {/* Skeleton Hero */}
          <div className="w-full h-64 md:h-80 lg:h-96 bg-deep-slate rounded-sm border border-slate-800/50"></div>
          
          {/* Skeleton Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="w-full h-64 bg-deep-slate rounded-sm border border-slate-800/50"></div>
            <div className="w-full h-64 bg-deep-slate rounded-sm border border-slate-800/50"></div>
            <div className="w-full h-64 bg-deep-slate rounded-sm hidden md:block border border-slate-800/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
