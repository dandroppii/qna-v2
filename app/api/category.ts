import { BaseResponse, IGetCategoryResponse } from '@/types/common';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}

export async function getCategory(): Promise<BaseResponse<IGetCategoryResponse[]>> {
  const response = await fetch('https://strapistg.droppii.com/api/qna-categories?populate=*', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonData = await response.json()
  return jsonData
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const response = await getCategory()

  return NextResponse.json(response);
}


export const runtime = 'edge';
