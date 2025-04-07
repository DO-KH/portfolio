import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "dkh9390@naver.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-[#222] text-white text-center px-5"
    >
      <motion.h2
        className="text-[2.5rem] font-extrabold tracking-wide mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-[1.1rem] max-w-[700px] leading-[1.8] opacity-90 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        포트폴리오를 봐주셔서 감사합니다. <br />
        함께할 기회가 있다면 언제든지 연락주세요!
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-6 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* 이메일 */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={copyToClipboard}
        >
          <MdEmail className="w-6 h-6 text-teal-400 group-hover:scale-110 transition" />
          <span className="text-teal-400 group-hover:underline">
            {email}
          </span>
          {copied && (
            <span className="ml-2 text-sm text-green-400">Copied!</span>
          )}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/DO-KH"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:underline"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="w-6 h-6"
          />
          <span className="text-teal-400">https://github.com/DO-KH</span>
        </a>
      </motion.div>

      {/* 하단 마무리 멘트 */}
      {/* <motion.p
        className="text-sm text-gray-400 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        🙌 마지막까지 봐주셔서 감사합니다. 새로운 만남을 기대합니다!
      </motion.p> */}
    </section>
  );
};

export default Contact;
