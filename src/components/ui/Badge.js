const colorMap = {
  blue: 'bg-category-blue/10 text-category-blue',
  purple: 'bg-category-purple/10 text-category-purple',
  pink: 'bg-category-pink/10 text-category-pink',
  orange: 'bg-category-orange/10 text-category-orange',
  green: 'bg-category-green/10 text-category-green',
  yellow: 'bg-category-yellow/10 text-category-yellow',
};

export default function Badge({ children, color = 'blue' }) {
  return (
    <span className={`
      inline-flex items-center gap-1
      px-2.5 py-1
      text-xs font-medium
      rounded-md
      ${colorMap[color] || colorMap.blue}
    `}>
      {children}
    </span>
  );
}
