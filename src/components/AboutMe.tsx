import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-screen flex justify-center items-center bg-[#222] text-white text-center border-b border-[#444]"
    >
      <div className="max-w-[800px] p-5">
        {/* 제목 등장 */}
        <motion.h1
          className="text-[3rem] font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          반갑습니다! <br />
          <span className="text-[#4CAF50] text-[3.2rem]">
            프론트엔드 개발자 도경흔
          </span>
          입니다.
        </motion.h1>

        {/* 설명 문구 등장 (조금 더 늦게) */}
        <motion.p
          className="text-[1.2rem] mt-6 opacity-80 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          UI로 사용자와 대화하는 걸 좋아합니다. <br />
          작은 디테일이 모여 좋은 경험이 된다고 믿어요.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
