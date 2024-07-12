import Image from 'next/image';

const ListQuestionsEmpty = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-6">
      <Image src={'/search-not-found.png'} alt="not found" width={203} height={96} />
      <div>
        <h3 className="mb-2 font-regular">Chưa có hướng dẫn cho chủ đề này</h3>
      </div>
    </div>
  );
};

export default ListQuestionsEmpty;
