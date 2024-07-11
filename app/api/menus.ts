import { BaseResponse, IGetMenuResponse } from '@/types/common';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}

export async function getMenu(): Promise<BaseResponse<IGetMenuResponse>> {
  const response = await fetch('https://strapistg.droppii.com/api/qna-menus?populate=qna_categories.icon&populate=icon', {
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

  const response = await getMenu()

  return NextResponse.json(response);
}


export const dynamic = 'force-dynamic';
export const runtime = 'edge';
