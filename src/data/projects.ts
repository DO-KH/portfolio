import { codeSamples } from "./code-samples";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  github: string;

  period: string;
  people: string;
  coment: string;
  features: string[];
  techStack: { label: string; value: string, description: string }[];
  implementation: { description: string; code: string }[];
  screenshots?: string[];
  retrospective?: string[];
  serviceLink: string;
}

export const projects = [
  {
    id: "todo",
    title: "TodoApp",
    description: "날짜별 할 일을 관리할 수 있는 투두앱",
    details: "날짜별 할 일을 캘린더를 통해 체계적으로 관리",
    image:
      "https://raw.githubusercontent.com/Doo-Nuts/todo-app/0904e0197ca619db97bea66961600a8faf75835a/public/todoapp1.png",
    github: "https://github.com/xxx/todo-app",
    period: "2025-01",
    people: "(1인)",
    coment: `"결과적으로 닭 잡는데 소 잡는 칼을 사용한 프로젝트였습니다."`,
    features: [
      "사용자별 todo",
      "날짜별 todo를 캘린더를 통해 체계적으로 관리",
      "게스트 todo는 로컬스토리지에 저장",
      "카테고리별 필터 기능",
    ],
    techStack: [
      { label: "Frontend", value: "Next.js (App Router)", description: "" },
      { label: "Backend", value: "ServerLess (API Route)", description: "" },
      { label: "Language", value: "TypeScript", description: "" },
      { label: "Database", value: "Supabase (PostgreSQL via Prisma ORM)", description: "" },
      { label: "Auth", value: "NextAuth (jwt 토큰 기반)", description: "" },
      { label: "State Manegement", value: "Zustand", description: "" },
      { label: "Style", value: "Tailwind CSS", description: "" },
    ],
    implementation: [
      {
        description:
          "할 일에 대한 모든 요청을 Zustand Store로 관리하여 상태가 전역에서 유지됨",
        code: codeSamples.todoApp1,
      },
      {
        description:
          "react-modal을 사용하여 사용자가 빠르게 로그인과 회원가입에 접근할수 있도록 구성",
        code: codeSamples.todoApp2,
      },
      {
        description:
          "인증 유저, 게스트 유저 상태에 따라 상태 관리 방식을 다르게 함",
        code: codeSamples.todoApp3,
      },
    ],
    retrospective: [
      "로그인 여부에 따라 렌더링 결과가 달라지므로 SSR, SSG등 사전 렌더링 방식 적용에 한계가 있었음",
      "대부분의 기능이 사용자의 상호작용으로 동작하기에 서버 컴포넌트로 분리 이점이 없음",
      "Next.js를 학습하기 위한 프로젝트였지만 해당 프로젝트는 CSR을 유지하는게 맞으며 여러 이유로 해당 프레임워크는 오버스펙이였음을 판단함",
    ],
    screenshots: [
      "/todoapp/todoapp1.png",
      "/todoapp/todoapp2.png",
      "/todoapp/todoapp3.png",
    ],
    serviceLink: "https://todoapp-p1moyq30t-doo-nuts-projects.vercel.app/"
  },
  {
    id: "streamnest",
    title: "StreamNest",
    description: "YouTube UI/UX를 기반으로한 동영상 스트리밍 서비스",
    details:
      "YouTube Api를 이용하여 실제 업로드된 영상을 불러오는 유사 유튜브 사이트",
    image:
      "https://github.com/Doo-Nuts/StreamNset/blob/main/public/streamnest1.png?raw=true",
    github: "https://github.com/xxx/todo-app",
    period: "2025-01",
    people: "(1인)",
    coment: `"공식이 주는 안정감"`,
    features: [
      "카테고리별 영상 목록 페이지, 영상 시청 페이지",
      "검색 기능 및 검색 결과 페이지",
      "인증 유저 좋아요 누른 영상 페이지",
      "영상 목록 무한 스크롤",
      "초기 데이터 페칭은 SSR로 동작, 이후 스크롤 로드에 대해서는 CSR로 동작",
    ],
    techStack: [
      { label: "Frontend", value: "Next.js (App Router)", description: "SSR을 통한 초기 로딩 속도 개선, 서버·클라이언트 컴포넌트로 렌더링 최적화" },
      { label: "Backend", value: "Serverless (API Route)", description: "프론트·백엔드 일원화로 편리한 코드 관리와 동시에 REST API 방식 유지" },
      { label: "Language", value: "TypeScript", description: "YouTube Api 엔드포인트별 제공하는 복잡한 데이터 타입을 안정적으로 관리" },
      { label: "External API", value: "YouTube Data API v3", description: "기존 유튜브 영상 및 관련 데이터 제공" },
      { label: "Auth", value: "NextAuth (Google OAuth)", description: "빠르고 간편한 유지보수, 검증된 패키지를 통해 보안 취약점을 대신 관리" },
      { label: "Style", value: "Tailwind CSS", description: "빠른 개발, 컴포넌트 기반 UI와 결합하여 재사용성 강화" },
      { label: "Deployment", value: "Vercel", description: "Next.js기반 완벽 호환성, Serverless 환경에서 자동 스케일링으로 동작" },
    ],
    implementation: [
      {
        description:
          "YouTube API의 특성상 엔드포인트별로 제공하는 정보가 제한되어 있어, 서버 측에서 여러 API 응답을 병합하거나 가공하여 클라이언트가 요청한 데이터(예: 영상 정보와 채널 프로필)를 완성된 형태로 전달하는 방식을 사용.",
        code: codeSamples.streamNest1,
      },
      {
        description:
          "SSR 시점의 fetch 요청은 브라우저가 아닌 서버 환경에서 실행되기 때문에, API 요청 경로를 명확히 인식시킬 수 있도록 절대 경로를 사용해야 함.",
        code: codeSamples.streamNest2,
      },
      {
        description:
          "초기 SSR 시점에서 영상 목록과 함께 pageToken을 받아오고, 이후 클라이언트 측에서는 해당 pageToken을 API 요청의 매개변수로 활용해 추가 데이터를 로드함으로써 무한 스크롤을 구현함.",
        code: codeSamples.streamNest3,
      },
    ],
    retrospective: [
      "해당 서비스는 무한스크롤을 지원하는 API에 대해 PageToken을 영상 데이터와 이어서 받아올수 있었음. 따라서 초기 데이터에 한해 SSR을 도입함으로써 사용자 경험적 측면에서 실질적 이점을 얻을수 있었다고 판단함.",
      "사용자 인터랙션 이후 빠른 반응을 중시하는 CSR 기반 페이지가 로딩 속도 개선을 위해 SSR을 도입하는 것은 초기 로딩 속도는 다소 개선 될 수 있으나 서버 비용을 높일 수 있기에 신중한 판단이 필요함.",
      "사전 렌더링 전략은 기술적 이슈보다 사용자의 긍정적인 경험을 우선으로 하여 적절히 적용되어야 함.",
      "SSR 적용을 위해 서버 컴포넌트가 품은 리액트 훅과 JS코드는 RSC 구조로 직렬화 되며 CSR 시점에 하이드레이션된다. 이때 직렬화를 위한 SSR-Safe 검토가 필요함.",
      "API Route를 사용하는 경우 서버 컴포넌트에서 fetch 요청시 절대경로를 통해 요청경로를 명확히 할 필요가 있으며 fetch 이전에 헤더를 미리 세팅 해놓아야 함"
    ],
    // retrospective: [
    //   "해당 서비스는 영상 시청 페이지를 제외한 대부분의 페이지에서 무한 스크롤을 지원하고 있으며, YouTube API의 pageToken을 통해 영상 데이터를 이어서 받아올 수 있다.\n따라서 초기 데이터에 한해 SSR을 도입함으로써 사용자 경험 측면에서 실질적인 이점을 얻을 수 있었다고 판단된다.\n\n다만, 사용자 인터랙션 이후 빠른 반응성을 중시하는 CSR 기반 페이지에 SSR을 도입할 경우, 초기 로딩 속도는 다소 개선될 수 있으나 서버 비용 증가만 초래할 수 있어 상황에 따라 신중한 선택이 필요하다.\n\n이러한 이유로 사전 렌더링 전략은 단순히 기술적 이슈 해결보다는 사용자의 긍정적인 경험을 최우선으로 고려해 적절히 적용되어야 한다.\n\n또한, 페이지 렌더링은 서버와 클라이언트 환경에 따라 유연하게 설계되어야 하며, 이 과정에서 React 훅의 SSR-Safe 여부를 신중히 검토하고, 비동기 함수의 실행 시점도 렌더링 전략에 맞춰 전략적으로 구성하는 것이 중요하다."
    // ],
    screenshots: [
      "/streamnest/streamnest1.png",
      "/streamnest/streamnest2.png",
      "/streamnest/streamnest3.png",
    ],
    serviceLink: "https://stream-nest-beta.vercel.app/"
  },
  {
    id: "myFridge",
    title: "My Fridge",
    description: "냉장고 식재료 관리 서비스",
    details: "유통기한을 기반으로 식재료 재고를 체계적으로 관리",
    image:
      "https://github.com/Doo-Nuts/my-fridge/blob/main/public/myfridge1.png?raw=true",
    github: "https://github.com/xxx/todo-app",
    period: "2025-03",
    people: "(1인)",
    coment: `"기획의 중요성을 느낀 프로젝트였습니다."`,
    features: [
      "유통기한, 입고 날짜를 이용하여 식품 데이터 자동 분류 및 시각화",
      "서비스 최초 진입시 게스트, 회원 모드 선택 가능",
      "유통기한 임박, 식품 추가 시 toast 알림 - 활성화/비활성화 가능",
      "식재료 카테고리별 분류 가능",
    ],
    techStack: [
      { label: "Frontend", value: "React.js (Vite)", description: "Vite의 효율적인 번들링과 최적화된 빌드로 빠르고 안정적인 서비스 개발" },
      { label: "Backend", value: "Node.js (Express)", description: "비동기 I/O 기반 API 서버의 빠른 응답성과 사용자 데이터의 실시간 처리" },
      { label: "Language", value: "TypeScript", description: "프론트와 백엔드를 같은 언어로 일치시켜 데이터 타입의 일관성 확보, 유지보수성 강화" },
      { label: "Database", value: "MySQL (via Prisma ORM)", description: "사용자, 데이터간 안정적인 관계 관리, 실제 운영 가능성 고려" },
      { label: "Auth", value: "쿠키 기반 세션 (Express-Session, MySQLStore)", description: "단순·직관적인 세션 관리, 세션 데이터의 영속성 확보" },
      { label: "State Manegement", value: "Zustand", description: "프로젝트 규모에 맞는 상태관리, 리렌더링 최적화" },
      { label: "Style", value: "Tailwind CSS", description: "빠른 개발 및 스타일 충돌 최소화" },
      { label: "Deployment / Hosting", value: "Vercel, Railway", description: "자동 빌드 및 깃허브 연결, MySQL 데이터베이스 호스팅" }
    ],
    implementation: [
      {
        description: "팩토리 메서드 패턴을 이용하여 itemService 인터페이스에 대해 적절한 서비스 구현체를 반환(게스트, 회원)",
        code: codeSamples.myFridge1,
      },
      {
        description: "게스트 모드로 추가한 로컬 데이터를 회원가입 시점에 여부를 확인하여 DB에 이전",
        code: codeSamples.myFridge2,
      },
      {
        description: "알림 상태를 Zustand Store로 전역 관리(유통기한 임박 시, 식재료 추가 시)",
        code: codeSamples.myFridge3,
      }

    ],
    retrospective: [
      "React는 View 중심의 프레임워크로 전역 상태를 ",
      "초기 로딩 속도 개선을 위해 직접 SSR을 구현하려 했지만 실패함, 페이지 특성상 SSR-Safe 하지 않은 훅이 있어 구현에 제약이 있었음",
      "SPA를 통한 긍정적 경험을 위해 각 컴포넌트가 필요할때 트리거 되어 렌더링 되어야 하지만 본 프로젝트는 냉장고 데이터가 한 눈에 들어와야 하므로 조건부 렌더링은 적합하지 않다고 판단함",
      "TypeScript와의 시너지로 Prisma ORM은 정의된 데이터 모델을 기반으로 API 응답 타입을 자동으로 유추 가능했으며, DB 스키마와 코드간의 동기화가 자연스럽게 이루어져 개발이 편했음",
    ],
    screenshots: [
      "/myfridge/myfridge1.png",
      "/myfridge/myfridge2.png",
      "/myfridge/myfridge3.png",
    ],
    serviceLink: "https://my-fridge-alpha.vercel.app/"
  },
];
