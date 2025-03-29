import { motion } from "framer-motion";

const techs = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "시맨틱 마크업을 고려한 웹 표준 작성 가능" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Flexbox, Grid 활용 및 반응형 디자인 적용 가능" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "ES6+ 문법과 비동기 처리 이해" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "React 프로젝트에서 TS 적용 및 타입 관리 경험" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "컴포넌트 기반 개발 및 상태 관리 (Zustand, React Query)" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "SSR, ISR 활용 및 SEO 최적화 경험" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Express 기반 백엔드 API 개발 및 JWT 인증 구현" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Prisma 활용 및 데이터베이스 최적화 경험" },
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
