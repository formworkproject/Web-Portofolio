import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProjectGallery } from '@/components/project-gallery';
import { ScrollReveal } from '@/components/scroll-reveal';
import { projects, Project } from '@/data/projects';
import { Info } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Aditya Grimaldi`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <Link 
                href="/projects" 
                className="inline-flex items-center text-sm text-[#6B6B6B] hover:text-[#E8652D] transition-colors mb-8"
              >
                ← Back to Projects
              </Link>
              
              <div className="space-y-6 max-w-4xl">
                <div className="text-xs uppercase tracking-widest text-[#E8652D] font-medium">
                  {project.category}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {project.title}
                </h1>

                {project.isAcademic && project.academicNote && (
                  <div className="flex items-start gap-3 p-4 bg-[#141414] border border-[#1E1E1E] rounded-lg mt-6">
                    <Info className="w-5 h-5 text-[#E8652D] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#6B6B6B]">{project.academicNote}</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6 text-sm text-[#6B6B6B]">
                  <div><span className="text-[#F0EDE8] mr-2">Year:</span>{project.year}</div>
                  <div><span className="text-[#F0EDE8] mr-2">Role:</span>{project.role}</div>
                  <div><span className="text-[#F0EDE8] mr-2">Location:</span>{project.location}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
            
            {/* Main Column */}
            <div className="space-y-24">
              
              <ScrollReveal delay={0.1}>
                <section className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-[#E8652D]">01</span>
                    <h2 className="text-2xl font-semibold">Overview</h2>
                  </div>
                  <div className="text-[#6B6B6B] space-y-4 leading-relaxed prose prose-invert max-w-none">
                    <p>{project.description}</p>
                  </div>
                </section>
              </ScrollReveal>

              {project.responsibilities && project.responsibilities.length > 0 && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">02</span>
                      <h2 className="text-2xl font-semibold">My Role</h2>
                    </div>
                    <ul className="list-disc list-outside ml-6 text-[#6B6B6B] space-y-2">
                      {project.responsibilities.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {project.objectives && project.objectives.length > 0 && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">03</span>
                      <h2 className="text-2xl font-semibold">Objectives</h2>
                    </div>
                    <ul className="list-disc list-outside ml-6 text-[#6B6B6B] space-y-2">
                      {project.objectives.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {project.workflow && project.workflow.length > 0 && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">04</span>
                      <h2 className="text-2xl font-semibold">Process</h2>
                    </div>
                    <ol className="list-decimal list-outside ml-6 text-[#6B6B6B] space-y-2">
                      {project.workflow.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                      ))}
                    </ol>
                  </section>
                </ScrollReveal>
              )}

              {project.deliverables && project.deliverables.length > 0 && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">05</span>
                      <h2 className="text-2xl font-semibold">Technical Output</h2>
                    </div>
                    <ul className="list-disc list-outside ml-6 text-[#6B6B6B] space-y-2">
                      {project.deliverables.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {project.results && project.results.length > 0 && project.results[0] !== '' && !project.results[0].includes('[') && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">06</span>
                      <h2 className="text-2xl font-semibold">Results</h2>
                    </div>
                    <ul className="list-disc list-outside ml-6 text-[#6B6B6B] space-y-2">
                      {project.results.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <ScrollReveal>
                  <section className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-[#E8652D]">
                        {project.results && project.results.length > 0 && project.results[0] !== '' && !project.results[0].includes('[') ? '07' : '06'}
                      </span>
                      <h2 className="text-2xl font-semibold">Gallery</h2>
                    </div>
                    <ProjectGallery images={project.gallery} projectTitle={project.title} />
                  </section>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#141414] border border-[#1E1E1E] rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Project Info</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="block text-[#6B6B6B] mb-1">Category</span>
                      <span className="text-[#F0EDE8]">{project.category}</span>
                    </div>
                    <div>
                      <span className="block text-[#6B6B6B] mb-1">Year</span>
                      <span className="text-[#F0EDE8]">{project.year}</span>
                    </div>
                    <div>
                      <span className="block text-[#6B6B6B] mb-1">Location</span>
                      <span className="text-[#F0EDE8]">{project.location}</span>
                    </div>
                  </div>

                  <hr className="my-6 border-[#1E1E1E]" />

                  <div>
                    <h4 className="text-[#6B6B6B] text-sm mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool: string) => (
                        <span key={tool} className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-full px-3 py-1 text-xs text-[#F0EDE8]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <>
                      <hr className="my-6 border-[#1E1E1E]" />
                      <div>
                        <h4 className="text-[#6B6B6B] text-sm mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2 text-xs text-[#E8652D]">
                          {project.tags.map((tag: string) => (
                            <span key={tag}>#{tag}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#141414] border-t border-[#1E1E1E]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-12">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {relatedProjects.map((p: Project) => (
                  <Link key={p.id} href={`/projects/${p.slug}`} className="group block">
                    <div className="space-y-4">
                      <div className="text-xs uppercase tracking-widest text-[#E8652D] font-medium">
                        {p.category}
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-[#E8652D] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#6B6B6B] line-clamp-2">
                        {p.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
