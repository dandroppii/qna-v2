import { getCategory } from '@/app/api/category';
import { getQuestionOfCategory } from '@/app/api/category/[id]';
import dynamic from 'next/dynamic';

const QuestionList = dynamic(() => import('@/components/QuestionList'), { ssr: false });

export default async function CategoryDetail({
  params,
}: Readonly<{
  params: {
    id: string;
  };
}>) {
  const questions = await getQuestionOfCategory(params.id);

  return <QuestionList questions={questions.data} />;
}

export async function generateStaticParams() {
  try {
    const response = await getCategory();
    const paths: { id: string }[] = [];
    response.data.forEach(({ id }) => {
      paths.push({ id: `${id}` });
    });
    return paths;
  } catch (error) {
    return [];
  }
}

export const dynamicParams = false;