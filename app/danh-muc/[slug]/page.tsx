import { getCategory } from '@/app/api/category';
import { getQuestionOfCategory } from '@/app/api/category/[id]';
import dynamic from 'next/dynamic';

import { convertToSlug } from '@/utils/slug';

const QuestionList = dynamic(() => import('@/components/QuestionList'), { ssr: false });

export default async function CategoryDetail({
  searchParams,
}: Readonly<{
  searchParams: any;
}>) {
  const questions = await getQuestionOfCategory(searchParams.id);

  return <QuestionList questions={questions.data} />;
}

export async function generateStaticParams() {
  try {
    const response = await getCategory();
    const paths: { slug: string }[] = [];
    response.data.forEach(({ id, attributes }) => {
      const slug = convertToSlug(attributes.name);
      paths.push({ slug: `${slug}?id=${id}` });
    });
    console.log('🚀 ~ response.data.forEach ~ paths:', paths);
    return paths;
  } catch (error) {
    return [];
  }
}

export const dynamicParams = false;
