const Intro = () => {
  return (
    <section id="intro" className="h-screen flex justify-center items-center bg-[#222] text-white text-center">
      <div className="max-w-[800px] p-5">
        <h1 className="text-[3rem] font-bold">
          반갑습니다! <br />
          <span className="text-[#4CAF50] text-[3.2rem]">프론트엔드 개발자 도경흔</span>입니다.
        </h1>
        <p className="text-[1.2rem] mt-6 opacity-80 leading-relaxed">
          UI로 사용자와 대화하는 걸 좋아합니다. <br />
          작은 디테일이 모여 좋은 경험이 된다고 믿어요.
        </p>
      </div>
    </section>
  );
};

export default Intro;
