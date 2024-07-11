import { IQuestionResponse } from '@/types/common';
import dayjs from 'dayjs';
import Link from 'next/link';

interface Props {
  questions: IQuestionResponse[];
}

const QuestionList = ({ questions }: Props) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {questions?.map(({ id, attributes }) => (
        <Link
          key={id}
          href={`/qna/${attributes.category?.data?.id}/${id}`}
          className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 shadow hover:bg-gray-100 dark:border-gray-700
            dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{attributes.title}</h5>
          <p className="mb-0 font-light italic text-gray-400 dark:text-gray-400">
            {dayjs(attributes.createdAt).format('DD/MM/YYYY HH:mm')}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default QuestionList;
