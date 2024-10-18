

const Example = ({service, onClick}) => {
  

  return (
    <div className='pt-[10px] overflow-x-scroll  mb-[20px] h-[140px]  '     >
      <div className="flex pl-[1rem]   ">
        {service.map((slide, index) => (
          slide.items.map((slide1)=>(
          <div
            key={slide1.id}
            className="min-w-[260px] h-[120px] relative   rounded-[25px] shadow-md bg-cover mr-[1rem] bg-[url('./assets/jawdat.jpg')]"
            onClick={()=>onClick(slide1)}
          >
            
            <div className="mt-2 max-h-[100%] px-[10px] flex justify-between  ">
              <div className='text-[17px] leading-4 p-[10px] max-w-[70%] h-[100%] font-semibold text-white'>{slide1.title}</div>

            </div>
            <p className='text-lg text-white font-bold  bg-gray-600 px-[10px] p-[5px] rounded-tl-[25px] rounded-br-[25px] absolute right-0 bottom-0'>{slide1.price }$</p>
          </div>
        ))))}
      </div>
    </div>
  );
};

export default Example;

