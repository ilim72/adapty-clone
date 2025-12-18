import Image from 'next/image';

export default function AuthorMeta({ author, date, size = 'md' }) {
  const avatarSize = size === 'sm' ? 32 : 40;
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  // Format date to Russian locale
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <div className="flex items-center gap-3">
      {author?.avatar?.url && (
        <Image
          src={author.avatar.url}
          alt={author.avatar.alt || author.name}
          width={avatarSize}
          height={avatarSize}
          className="rounded-full"
        />
      )}
      <div className={textSize}>
        {author?.name && (
          <p className="font-medium text-text-primary">
            {author.name}
          </p>
        )}
        {date && (
          <p className="text-text-tertiary">
            {formattedDate}
          </p>
        )}
      </div>
    </div>
  );
}
