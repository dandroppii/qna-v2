import { getCategory } from '@/app/api/category';
import { getQuestionDetail } from '@/app/api/question/[id]';
import dynamicR from 'next/dynamic';

import { convertToSlug } from '@/utils/slug';

const QuestionDetailComponent = dynamicR(() => import('@/components/QuestionDetail'), { ssr: false });

export default async function QuestionDetail({ searchParams }: any) {
  console.log('🚀 ~ QuestionDetail ~ searchParams:', searchParams.id);
  const question = await getQuestionDetail(searchParams.id);

  return <QuestionDetailComponent question={question.data} />;
}

export async function generateStaticParams() {
  try {
    const response = await getCategory();
    const paths: { slug: string }[] = [];
    response.data.forEach(({ attributes: { qna_questions } }) => {
      qna_questions?.data?.forEach(({ id: qId, attributes }) => {
        const slug = convertToSlug(attributes.title);
        paths.push({ slug: `${slug}?id=${qId}` });
      });
    });
    console.log('🚀 ~ qna_questions?.data?.forEach ~ paths:', paths);
    return paths;
  } catch (error) {
    return [];
  }
}
