import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { ctaSection } from '@/data/landing';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-6">
            {ctaSection.headline}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10">
            {ctaSection.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              {ctaSection.primaryCTA}
            </Button>
            <Button variant="secondary" size="lg">
              {ctaSection.secondaryCTA}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
