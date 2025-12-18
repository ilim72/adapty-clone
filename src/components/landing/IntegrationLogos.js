import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { integrations } from '@/data/landing';

export default function IntegrationLogos() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Интеграции с вашими инструментами"
          subtitle="Подключите Adapty к сервисам, которые уже используете"
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center w-32 h-16 bg-surface-elevated border border-border-light rounded-lg hover:border-border hover:shadow-card transition-all duration-200"
            >
              <span className="text-sm font-medium text-text-secondary">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
