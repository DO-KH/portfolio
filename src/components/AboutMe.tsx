import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AboutMe = () => {
  const [showInterview, setShowInterview] = useState(false);

  const toggleInterview = () => setShowInterview((prev) => !prev);

  return (
    <section
      id="about-me"
      className="h-screen flex justify-center items-center bg-[#222] text-white text-center border-b border-[#444]"
    >
      <div className="max-w-[900px] p-5">
        {/* 제목 등장 */}
        <motion.h1
          className="text-[3rem] font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          반갑습니다! <br />
          <span className="text-[3.2rem] text-[#4CAF50]">
            프론트엔드 개발자{" "}
            <span className="text-[#388E3C] font-extrabold tracking-wide">
              도경흔
            </span>
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
          "내가 사용자라면?" <br />
          작은 디테일을 모아 좋은 경험을 만드는 개발자 입니다.
        </motion.p>
        {/*Self Interview*/}
        <motion.p
          className="text-2xl mt-6 leading-relaxed font-semibold text-[#4CAF50] 
            cursor-pointer underline transition-all duration-300 
            hover:scale-105 hover:text-[#81C784] flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={toggleInterview}
        >
          About Me
          <motion.span
            animate={{ rotate: showInterview ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.p>

        <AnimatePresence>
          {showInterview && (
            <motion.div
              className="mt-6 text-left bg-[#333] p-4 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                Q. 프론트엔드 개발자로 전향한 이유는 무엇인가요?
              </h3>
              <p className="mb-4">
                호기심에 직접 JAVA로 CURD를 만들고 데이터베이스와 연동해보니
                자연스럽게 알게 되었으며, <br /> 내가 개발자로서 클라이언트에게
                만족을 주기 위해 UI로 대화하는 방법이 어울린다고 느꼈습니다.{" "}
                <br />
                사용자들과 상호 작용하며 그 경험에 다양한 의미를 부여할 수
                있다는 점이 매력적이였습니다.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                Q. 본인을 어필하고 싶은 역량 한가지를 꼽는다면?
              </h3>
              <p className="mb-4">
                저는 직관을 통해 상황을 빠르게 파악하고, 공감하는 능력을
                중요하게 생각합니다. <br /> 이러한 감각은 논리적인 사고와 조화를
                이루며, 문제의 본질을 빠르게 이해하고 통찰을 이끌어 냅니다.{" "}
                <br /> 또한 새로운 문제가 주어질 때마다 합리적인 판단을 할 수
                있도록 팀을 돕는 강력한 무기가 된다고 생각합니다.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                Q. 어떤 개발자가 되고 싶나요?
              </h3>
              <p>
                본질을 꿰뚫는 진짜 개발자가 되고 싶습니다. <br />
                무엇을 하든 본질을 이해하는 것이 중요하다고 믿으며, 이는 초심을
                잃지 않고 중요한 선택의 순간마다 최선의 판단을 내릴 수 있게
                합니다. <br />
                단순히 문제를 해결하는 것을 넘어, 깊은 통찰을 통해 미래의
                방향성을 제시할 수 있는 알맹이 있는 개발자가 되고자 합니다.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutMe;
