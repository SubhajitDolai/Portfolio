import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { generateSEO } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { DATA } from '@/data/resume';
import WorkSection from '@/components/section/work-section';

const BLUR_FADE_DELAY = 0.04;

export const metadata = generateSEO({
  title: 'Resume',
  description: `Resume and CV of ${DATA.name}, Full Stack Developer specializing in Next.js, React, TypeScript, Supabase, and scalable web applications. Download PDF or view online.`,
  url: '/resume',
  keywords: [
    'resume', 'CV', 'Subhajit Dolai', 'Full Stack Developer', 'Next.js', 'Supabase', 'React', 'TypeScript', 'JavaScript', 'Software Engineer', 'Web Developer', 'Backend', 'Frontend', 'Personal Resume', 'Download Resume', 'Portfolio', 'Developer Resume', 'Subhajit Dolai Resume', 'PDF Resume', 'Hire', 'Curriculum Vitae'
  ],
});

const resumeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: DATA.name,
  url: DATA.url,
  sameAs: [
    'https://github.com/subhajitdolai',
    'https://linkedin.com/in/subhajit-dolai'
  ],
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance / Open Source',
  },
  description: DATA.summary,
  image: DATA.avatarUrl,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${DATA.url}/resume`
  },
  hasCredential: {
    '@type': 'CreativeWork',
    name: `Resume — ${DATA.name}`,
    url: `${DATA.url}/Resume.pdf`,
    encodingFormat: 'application/pdf',
  }
};

export default function ResumePage() {

  return (
    <main className="flex-1 flex flex-col gap-8 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl">
          <div className="relative rounded-2xl border border-border p-4 md:p-6 shadow-md overflow-hidden">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-0 h-10 rounded-t-2xl"
              style={{
                backgroundImage: 'radial-gradient(#202020 1px, transparent 1px)',
                backgroundSize: '12px 12px',
                opacity: 0.14,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-6 items-center">
              <div className="flex items-center justify-start">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 md:size-36 border-2 border-border rounded-full shadow-lg ring-4 ring-border transform transition-transform hover:scale-105">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>

              <div className="flex flex-col items-start justify-center md:items-start md:col-span-1">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight whitespace-nowrap mb-2 md:mb-4"
                  yOffset={6}
                  text={`Check out my resume`}
                />

                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                  <p className="text-muted-foreground text-sm mb-4">Download the PDF or open it in a new tab.</p>
                </BlurFade>

                <div className="flex gap-3">
                  <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <a
                      href="/Resume.pdf"
                      download="Subhajit_Dolai_Resume.pdf"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-foreground text-background hover:shadow-lg transition-shadow h-10"
                    >
                      Download
                    </a>
                  </BlurFade>
                  <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.02}>
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border hover:bg-accent/50 transition-colors h-10"
                    >
                      Open <ArrowUpRight className="size-3" />
                    </a>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <section className="border border-border rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Work Experience</h2>
              <WorkSection />
            </section>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <section className="border border-border rounded-lg p-4">
              <h2 className="text-lg font-medium mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 6 + id * 0.02}>
                    <span className="px-3 py-1 rounded bg-muted text-sm">{skill.name}</span>
                  </BlurFade>
                ))}
              </div>
            </section>
          </BlurFade>
        </div>
      </section>

      <JsonLd data={resumeStructuredData} />
    </main>
  );
}
