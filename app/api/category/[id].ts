
import { BaseResponse, IQuestionResponse } from '@/types/common';


export async function getQuestionOfCategory(id: string): Promise<BaseResponse<IQuestionResponse[]>> {
  const response = await fetch(`https://strapistg.droppii.com/api/qna-questions?populate=*&filters[category][id][$eq]=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonData = await response.json()
  return jsonData
}
 
export const runtime = 'edge';