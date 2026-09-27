import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

function decodeSlug(slug: string[] | undefined) {
  return slug?.map((segment) => {
    try {
      return decodeURIComponent(segment);
    } catch {
      return segment;
    }
  });
}

function getPage(slug: string[] | undefined) {
  const page = source.getPage(slug);
  if (page) return page;

  const decodedSlug = decodeSlug(slug);
  return decodedSlug && source.getPage(decodedSlug);
}

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const isHome = !params.slug || params.slug.length === 0;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} className={isHome ? 'profile-home' : undefined}>
      {isHome ? (
        <>
          <header className="profile-home__header">
            <div>
              <p className="profile-home__eyebrow">About me</p>
              <h1 className="profile-home__title">Kumar Shantanu</h1>
            </div>
            <Image
              className="profile-home__portrait"
              src="/assets/dp.png"
              alt="Kumar Shantanu"
              width={800}
              height={800}
              priority
            />
          </header>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      ) : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = getPage(params.slug);
  if (!page) notFound();

  return {
    title: !params.slug || params.slug.length === 0 ? 'Kumar Shantanu' : page.data.title,
    description: page.data.description,
  };
}
