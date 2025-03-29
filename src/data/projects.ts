export interface ProjectType {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  github: string;

  period: string;
  people: string;
  features: string[];
  techStack: string[];
  screenshots?: string[];
  retrospective?: string[];
};

export const projects = [
  {
    id: "todo",
    title: "TodoApp",
    description: "날짜별 할 일을 관리할 수 있는 투두앱",
    details: "Next.js App Router, Zustand, Supabase 등 사용",
    image: "https://raw.githubusercontent.com/Doo-Nuts/todo-app/0904e0197ca619db97bea66961600a8faf75835a/public/todoapp1.png",
    github: "https://github.com/xxx/todo-app",
    period: "2025-01",
    people: "솔로",
    features: [
      "사용자 로그인 및 인증 아 배고파",
      "날짜별 할 일 관리",
      "로컬스토리지 기반 게스트 유저 관리",
      "캘린더 연동 및 필터링 기능",
    ],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Supabase + Prisma",
    ],
    screenshots: [
      "https://raw.githubusercontent.com/Doo-Nuts/todo-app/0904e0197ca619db97bea66961600a8faf75835a/public/todoapp1.png",
      "/project2.png",
      "/project3.png"
    ],
    retrospective: [
      "CSR, SSR, SSG에 대한 실험을 기반으로 CSR 중심 구조를 설계함",
      "Zustand, react-modal, FullCalendar 등 클라이언트 전용 로직으로 인해 서버 컴포넌트 분리 이점 없음",
      "기능보다도 렌더링 전략 판단과 구조 설계에 초점을 둔 프로젝트였음",
    ],
  },
  {
    id: "streamnest",
    title: "StreamNest",
    description: "Youtube UI/UX를 기반으로한 동영상 스트리밍 사이트",
    details: "Next.js App Router, Zustand, Supabase 등 사용",
    image: "https://github.com/Doo-Nuts/StreamNset/blob/main/public/streamnest1.png?raw=true",
    github: "https://github.com/xxx/todo-app",
    period: "2025-01",
    people: "솔로",
    features: [
      "카테고리별 영상 목록 페이지, 영상 시청 페이지",
      "검색 기능 및 검색 결과 페이지",
      "인증 유저 좋아요 누른 영상 페이지",
      "영상 목록 무한 스크롤",
      "초기 데이터 페칭은 SSR로 동작, 이후 스크롤 로드에 대해서는 CSR로 동작",
    ],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth(Google OAuth)",
      "YouTube Data Api v3"
    ],
    screenshots: [
      "https://github.com/Doo-Nuts/StreamNset/blob/main/public/streamnest1.png?raw=true",
      "/project2.png",
      "/project3.png"
    ],
    retrospective: [
      "사전 렌더링 전략은 사용자의 긍정적 경험을 위해 적절히 적용되어야 한다.",
      "스트리밍 서비스는 많은 데이터를 빠르게 사용자에게 제공해야 하므로 CSR보다 SSR로 미리 데이터를 불러올 필요가 있다.",
      "페이지 로딩은 서버, 클라이언트 환경에 따라 유연하게 이루어져야 하는데, 이 때 리액트 훅과 비동기 함수를 렌더링 시점에 맞춰 전략적으로 적용해야한다.",
      "리스트를 불러오는 api는 개별 영상정보를 제공하지 않으므로 id를 추출하여 영상 정보를 요청하는 이중 페칭 과정이 필요하며, 반복되는 요청은 유틸로 두어 대응할 필요가 있다.",
    ],
  },
];