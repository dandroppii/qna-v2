import Image from 'next/image';

const EmptySearch = ({ searchTerm }: { searchTerm: any }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-6">
      <Image src={'/search-not-found.png'} alt="not found" width={203} height={96} />
      <div>
        <h3 className="mb-2 font-bold">Không tìm thấy kết quả cho từ khoá {searchTerm}</h3>
        <p className="font-regular mb-2">Để tìm được kết quả chính xác hơn, bạn vui lòng:</p>
        <ul className='space-y-2 italic text-[14px]'>
          <li>* Kiểm tra lỗi chính tả của từ khóa đã nhập</li>
          <li>* Thử lại bằng từ khóa khác</li>
          <li>* Thử lại bằng những từ khóa ngắn gọn hơn</li>
        </ul>
      </div>
    </div>
  );
};

export default EmptySearch;
