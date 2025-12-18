import Container from '@/components/ui/Container';
import StarRating from '@/components/ui/StarRating';
import { socialProof } from '@/data/landing';

export default function SocialProof() {
  return (
    <section className="py-12 md:py-16 border-y border-border-light bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Rating */}
          <div className="flex items-center gap-4">
            <StarRating rating={socialProof.rating} />
            <span className="text-sm text-text-secondary">
              {socialProof.reviewCount} {socialProof.reviewText}
            </span>
          </div>

          {/* Client Logos */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-tertiary mr-4">{socialProof.trustedBy}:</span>
            <div className="flex items-center gap-6 md:gap-8">
              {socialProof.clients.map((client) => (
                <span
                  key={client}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
