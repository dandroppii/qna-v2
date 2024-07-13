import { BaseResponse, IQuestionResponse } from '@/types/common';

export async function getQuestionDetail(id: string): Promise<BaseResponse<IQuestionResponse>> {
  const response = await fetch(
    `https://strapistg.droppii.com/api/qna-questions/${id}?populate=steps.image&populate=icon&populate=related_questions&populate=category&populate=related_questions.category`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

export async function searchQuestion(searchTerm: string): Promise<BaseResponse<IQuestionResponse[]>> {
  const response = await fetch(
    `https://strapistg.droppii.com/api/qna-questions?populate=*&filters[$or][0][title][$containsi]=${searchTerm}&filters[$or][1][searchTitle][$containsi]=${searchTerm}&filters[$or][2][content][$containsi]=${searchTerm}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

export const dynamic = 'force-dynamic';
export const runtime = 'edge';
