import { getCategory } from '@/app/api/category';
import { redirect } from 'next/navigation';

export default async function CategoryDetail() {
  const response = await getCategory();
  redirect(`/qna/${response.data[0].id}`);
}
