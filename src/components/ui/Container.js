export default function Container({ children, className = '' }) {
  return (
    <div className={`container mx-auto px-4 lg:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
