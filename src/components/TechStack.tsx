import { motion } from "framer-motion";

const techs = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "SEO에 맞도록 의미론적인 태그 활용 가능" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Flex, Grid를 활용한 반응형 레이아웃 구성 가능" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "ES6+ 최신 문법을 활용한 비동기 흐름 제어 가능" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "React 컴포넌트간 명확한 데이터 흐름 구현에 활용" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "재사용 가능한 컴포넌트 활용으로 유지보수와 확장성 있는 구조 설계" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "서버 컴포넌트 기반 설계 및 SEO를 위한 사전 렌더링 방식 활용 가능" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Express 기반 백엔드 API 개발 및 로그인, Prisma ORM 활용 가능" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "SQL 쿼리 작성, Workbench, DBeaver 활용 가능" },
];

const TechStack = () => {
  const leftColumn = techs.filter((_, index) => index % 2 === 0);
  const rightColumn = techs.filter((_, index) => index % 2 !== 0);

  return (
    <section
      id="tech-stack"
      className="h-screen flex flex-col justify-center items-center bg-[#222] text-white text-center px-5 border-b border-[#444]"
    >
      {/* 타이틀 애니메이션 */}
      <motion.h2
        className="text-[2.5rem] font-extrabold tracking-wide mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        Tech Stack
      </motion.h2>

      {/* 카드 리스트 */}
      <div className="flex justify-center gap-12 max-w-[900px]">
        {[leftColumn, rightColumn].map((column, i) => (
          <div key={i} className="flex flex-col gap-8">
            {column.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-4 bg-[#333] p-5 rounded-lg w-[400px] min-h-[100px] shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                <div className="text-left flex-1">
                  <p className="text-[1.2rem] font-bold text-white">{tech.name}</p>
                  <p className="text-[0.9rem] text-gray-400 leading-[1.4]">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
