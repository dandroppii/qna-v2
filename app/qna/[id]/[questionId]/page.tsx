import { getCategory } from '@/app/api/category';
import { getQuestionDetail } from '@/app/api/question/[id]';
import dynamic from 'next/dynamic';

const QuestionDetailComponent = dynamic(() => import('@/components/QuestionDetail'), { ssr: false });

export default async function QuestionDetail({ params }: Readonly<{ params: { questionId: string } }>) {
  const question = await getQuestionDetail(params.questionId);

  return <QuestionDetailComponent question={question.data} />;
}

export async function generateStaticParams() {
  try {
    const response = await getCategory();
    const paths: { questionId: string }[] = [];
    response.data.forEach(({ attributes: { qna_questions } }) => {
      qna_questions?.data?.forEach(({ id: qId }) => {
        paths.push({ questionId: `${qId}` });
      });
    });
    return paths;
  } catch (error) {
    return [];
  }
}

export const dynamicParams = false;
