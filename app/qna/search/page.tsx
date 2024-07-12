import { searchQuestion } from '@/app/api/question/[id]';

import QuestionList from '@/components/QuestionList';

import EmptySearch from './components/Empty';

export default async function CategoryDetail({ searchParams }: any) {
  const res = await searchQuestion(searchParams?.q);

  if (!res.data.length) {
    return <EmptySearch searchTerm={searchParams?.q} />;
  }

  return <QuestionList questions={res.data} />;
}
