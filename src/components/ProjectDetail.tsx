import { ProjectType } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ProjectDetailProps = {
  project: ProjectType | null;
  projectIndex: number | null;
  onClose: () => void;
};

Modal.setAppElement("#root");

const ProjectDetail = ({
  project,
  projectIndex,
  onClose,
}: ProjectDetailProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const codeRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"; // 모달이 열릴 때 배경 스크롤 막기
    } else {
      document.body.style.overflow = "auto"; // 모달이 닫히면 다시 스크롤 가능하게
    }

    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트가 언마운트될 때 스크롤 해제
    };
  }, [project]);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openIndex !== null &&
        codeRefs.current[openIndex] &&
        !codeRefs.current[openIndex]!.contains(e.target as Node)
      ) {
        setOpenIndex(null); // 외부 클릭일 경우에만 닫기
      }
    };

    // 캡처 단계에서 이벤트 감지
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex]);

  return (
    <Modal
      isOpen={!!project}
      onRequestClose={onClose}
      className="modal-content flex flex-col items-center"
      overlayClassName="modal-overlay"
    >
      {project && (
        <>
          {/* 상단 (제목, 이미지) */}
          <div className="text-center mb-6 w-full max-w-[1100px] p-6 bg-[#FAFAFA] rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="mt-3">{project.details}</p>
            <p className="text-gray-700 mt-3 text-lg">
              {/* 기간 */}
              {project.period}
              {/* 참여인원 */}
              <span className="text-gray-600"> {project.people}</span>
            </p>
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[300px] object-contain mt-5 rounded-lg shadow-lg mx-auto"
            />
            <p className="text-md text-gray-800 mt-4 text-lg">
              {project.coment}
            </p>
          </div>

          {/* 하단 (세부 정보) */}
          <div className="text-left space-y-8 w-full max-w-[1100px] bg-[#FAFAFA] p-6 rounded-lg shadow-lg px-[130px]">
            {/* 주요 기능 */}
            <div className="border-b border-[#E5E7EB] pb-[22px]">
              <h3 className="text-lg font-semibold border-l-4 border-teal-500 pl-4 text-gray-700 mb-2">
                기능 및 특징
              </h3>
              <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
                {project.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* 사용 기술 */}
            <div className="border-b border-[#E5E7EB] mt-[-10px] pb-[22px]">
              <h3 className="text-lg font-semibold border-l-4 border-teal-500 pl-4 text-gray-700 mb-2">
                사용 기술
              </h3>
              <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
                {project.techStack.map((item, idx) => (
                  <li className="group list-item list-disc" key={idx}>
                    <strong className="text-gray-800 after:content-['-'] after:ml-2 mr-2 whitespace-nowrap">
                      {item.label}
                    </strong>
                    {projectIndex === 0 ? (
                      // project[0]일 때는 그냥 value만 표시
                      <span>{item.value}</span>
                    ) : (
                      // 나머지 프로젝트는 hover 시 description 표시
                      <span className="relative">
                        <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                          {item.value}
                        </span>
                        <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {item.description}
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 구현 전략 */}
            <div className="border-b border-[#E5E7EB] mt-[-10px] pb-[22px]">
              <h3 className="text-lg font-semibold border-l-4 border-teal-500 pl-4 text-gray-700 mb-2">
                구현 전략
              </h3>
              <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
                {project.implementation.map((item, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <li
                      key={idx}
                      ref={(el) => {
                        codeRefs.current[idx] = el;
                      }}
                      className="relative text-gray-700 z-0 list-item list-disc"
                    >
                      <div className="text-base leading-relaxed text-gray-700">
                        {item.description}{" "}
                        <button
                          className="text-sm text-green-600 ml-2 cursor-pointer"
                          onClick={() =>
                            setOpenIndex((prev) => (prev === idx ? null : idx))
                          }
                        >
                          {isOpen ? "코드 닫기" : "코드 보기"}
                        </button>
                      </div>

                      {isOpen && (
                        <div className="absolute bottom-full mb-2 left-0 w-[750px] bg-gray-900 text-white rounded-md shadow-xl p-4 z-50">
                          <SyntaxHighlighter
                            language="javascript"
                            style={oneDark}
                            wrapLongLines
                          >
                            {item.code}
                          </SyntaxHighlighter>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 프로젝트 회고 */}
            {project.retrospective && (
              <div className="border-b border-[#E5E7EB] mt-[-10px] pb-[22px]">
                <h3 className="text-lg font-semibold border-l-4 border-teal-500 pl-4 text-gray-700 mb-2">
                  프로젝트 회고
                </h3>
                <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
                  {project.retrospective.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 프로젝트 이미지 */}
            {project.screenshots && (
              <div>
                <h3 className="text-lg font-semibold border-l-4 border-teal-500 pl-4 text-gray-700 mb-2">
                  프로젝트 이미지
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.screenshots.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Preview${idx}`}
                      onClick={() =>
                        window.open(
                          src,
                          "_blank",
                          "width=800,height=500,left=200,top=100,toolbar=no,menubar=no"
                        )
                      }
                      className="w-[200px] aspect-[16/9] object-cover rounded-md shadow"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 닫기 버튼 */}
          <div className="mt-6 flex gap-5 text-center">
            <button
              onClick={onClose}
              className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg transition hover:bg-gray-900"
            >
              닫기
            </button>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg transition hover:bg-gray-900">
              <a href={project.serviceLink}>서비스로 이동</a>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ProjectDetail;
