import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-[#222] text-white text-center px-5"
    >
      {/* 타이틀 애니메이션 */}
      <motion.h2
        className="text-[2.5rem] font-extrabold tracking-wide mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.h2>

      {/* 설명 텍스트 애니메이션 */}
      <motion.p
        className="text-[1.1rem] max-w-[700px] leading-[1.8] opacity-90 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        포트폴리오를 봐주셔서 감사합니다. <br />
        함께할 기회가 있다면 언제든지 연락주세요! 😊
      </motion.p>

      {/* 연락처 정보 애니메이션 */}
      <motion.div
        className="flex flex-col gap-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          📧 Email:{" "}
          <a
            href="mailto:youremail@example.com"
            className="text-teal-400 hover:underline"
          >
            youremail@example.com
          </a>
        </p>
        <p>
          💼 GitHub:{" "}
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            github.com/yourgithub
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            linkedin.com/in/yourlinkedin
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
