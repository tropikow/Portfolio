type SectionProps = {
    id: string;
    children: React.ReactNode;
  };
  
  export default function Section({ id, children }: SectionProps) {
    return (
      <section
        id={id}
        className="min-h-screen flex items-center justify-center snap-start px-8"
      >
        {children}
      </section>
    );
  }
  