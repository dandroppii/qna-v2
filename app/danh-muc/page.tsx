import { getCategory } from '@/app/api/category';
import { redirect } from 'next/navigation';

import { convertToSlug } from '@/utils/slug';

export default async function CategoryDetail() {
  const response = await getCategory();
  const slug = convertToSlug(response.data[0].attributes.name);
  redirect(`/danh-muc/${slug}?id=${response.data[0].id}`);
}

export const runtime = 'edge';
