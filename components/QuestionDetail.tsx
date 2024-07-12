'use client';

import { IQuestionResponse } from '@/types/common';
import { useRef } from 'react';
import Slider from 'react-slick';

import QuestionList from './QuestionList';

interface Props {
  question: IQuestionResponse;
}

const QuestionDetail = ({ question }: Props) => {
  const ref = useRef<any>(null);
  const {
    attributes: { title, content, steps, related_questions },
  } = question || {};

  return (
    <div>
      <div className="text-lg font-bold">{title}</div>
      <hr className="mb-4 mt-2" />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {steps?.length ? (
        <div className="mt-10 grid h-[400px] grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center">
          <div className="max-h-[400px] max-w-[400px] m-auto">
            <Slider ref={ref} dots={false} vertical verticalSwiping>
              {steps?.map(({ image, id, description }) => {
                // eslint-disable-next-line @next/next/no-img-element
                return <img src={image.data.attributes.url} key={id} alt={description}  />;
              })}
            </Slider>
          </div>

          <div className="flex flex-col gap-4 ">
            {steps?.map(({ name, id, description }, idx) => {
              return (
                <button key={id} onClick={() => ref?.current?.slickGoTo?.(idx)} className="text-left">
                  <h5>
                    <strong>{name}</strong>
                  </h5>
                  <p>{description}</p>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      {related_questions?.data?.length ? (
        <>
          <div className="mb-3 mt-10 text-lg font-bold">Bài viết liên quan</div>
          <QuestionList questions={related_questions.data} />
        </>
      ) : null}
    </div>
  );
};

export default QuestionDetail;
