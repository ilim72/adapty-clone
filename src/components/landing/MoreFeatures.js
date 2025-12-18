import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from './FeatureCard';
import { moreFeatures } from '@/data/landing';

export default function MoreFeatures() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="И ещё больше возможностей"
          subtitle="Всё необходимое для работы с подписками в одном месте"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
