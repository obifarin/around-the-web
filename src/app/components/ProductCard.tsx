interface ProductCardProps {
  title: string;
  imagePlaceholder?: boolean;
  imageSrc?: string;
  url?: string;
}

export function ProductCard({ title, imagePlaceholder, imageSrc, url }: ProductCardProps) {
  return (
    <div className="group border border-black p-6 bg-white">
      {/* Issue Title */}
      <h3 className="font-['Inter'] uppercase tracking-wider mb-4">
        {title}
      </h3>
      
      {/* Image with 3D effect */}
      <div className="aspect-[3/4] bg-white border border-black mb-6 overflow-hidden flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
        ) : imagePlaceholder ? (
          <div className="font-['Inter'] uppercase tracking-wider opacity-20">
            Image
          </div>
        ) : null}
      </div>
      
      {/* Read Button */}
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full border-2 border-black px-6 py-3 font-['Inter'] font-normal uppercase tracking-[0.2em] text-center hover:bg-black hover:text-white transition-colors duration-200"
        >
          Read
        </a>
      )}
    </div>
  );
}