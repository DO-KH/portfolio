export const codeSamples = {
  todoApp1: `
  export const useTodoStore = create<TodoState>((set, get) => ({
    todos: [],

    // todos 불러오기
    fetchUserTodos: async () => {
      try {
        const fetchedTodos = await fetchTodos();
        set({ todos: fetchedTodos });
      } catch (error) {
        console.error("할 일 목록을 불러오는 중 오류 발생:", error);
      }
    },

    // 할 일 추가
    addTodo: async (email, todo) => {
      try {
        const newTodo = await fetchAddTodo(email, todo);
        if (newTodo) {
          set({ todos: [...get().todos, newTodo] });
        }
      } catch (error) {
        console.error("할 일을 추가하는 중 오류 발생:", error);
      }
    },

    // 할 일 삭제
    // ...

  }));
  `,
  todoApp2:`
    try {
      let res;
      if (modalType === "signin") {
        res = await fetchSignIn(email, password);
      } else if (modalType === "signup") {
        res = await fetchSignUp(email, password);
      }
  
      if (!res || res.error) {
        setErrorMessage(res?.error || "오류가 발생했습니다.");
        return;
      }
      
      if (modalType === "signup") {
        alert("회원가입 되었습니다! 로그인 해주세요");
        setModalType("signin");
      } else if(modalType === "signin") {
        setModalType(null)
      }
  
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("서버 요청 실패:", err);
      setErrorMessage(err instanceof Error ? err.message : "서버 에러 발생");
    }
  `,
  todoApp3: `
    // 인증 유저
    const { todos, addTodo, deleteTodo, } = useTodoStore();

    // 게스트
    const { localTodos, localAddTodo, localDeleteTodo } = useLocalTodos();

    // 현재 유저 상태
    const { user } = useAuthUserContext();

    // 유저 상태에 따른 데이터 불러오기
    const allTodos = !user ? localTodos : todos;
  `,
  streamNest1: `
    export async function GET(req: NextRequest) {
      // ...생략
      // 영상 id를 추출하여 채널 프로필 가져오기
      const channelId = video.snippet.channelId;
      const channelProfiles = await fetchChannelProfiles([channelId], API_KEY);
      const watchVideo =  {
        videoId: video.id,
        title: video.snippet.title,
        thumbnail: getBestThumbnail(video.snippet.thumbnails),
        channelName: video.snippet.channelTitle,
        viewCount: video.statistics.viewCount || "0",
        likeCount: video.statistics.likeCount || "0",
        channelProfile: channelProfiles[channelId]",
        publishedAt: video.snippet.publishedAt,
      };
      return NextResponse.json(watchVideo)
    }

    // 채널 프로필 요청하는 api
    export async function fetchChannelProfiles(channelIds: string[], apiKey: string): Promise<Record<string, string>> {
      if (channelIds.length === 0) return {};
      const url = \`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=\${channelIds.join(
        ","
      )}&key=\${apiKey}\`;
      const response = await fetch(url);
      const data = await response.json();
      if (!data.items) return {};

      // 채널 ID를 키로, 프로필 URL을 값으로 저장
      return data.items.reduce((acc: Record<string, string>, channel: ChannelItem) => {
        acc[channel.id] = channel.snippet.thumbnails.default?.url || "https://via.placeholder.com/50x50";
        return acc;
      }, {});
    }

  `,
  streamNest2:`
    export async function fetchLikedVideos(
      accessToken: string,
      pageToken?: string
    ): Promise<YouTubeVideoResponse> {

      let url = "";
      if (typeof window === "undefined") {
        // SSR 시점
        const { headers } = await import("next/headers");
        const host = (await headers()).get("host");
        const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
        url = \`\${protocol}://\${host}/api/youtube/liked?accessToken=\${accessToken}\${
          pageToken ? \`&pageToken=\${pageToken}\` : ""
        }\`;
      } else {
        // CSR 시점
        const host = window.location.host;
        const protocol = window.location.protocol;
        url = \`\${protocol}//\${host}/api/youtube/liked?accessToken=\${accessToken}\${
          pageToken ? \`&pageToken=\${pageToken}\` : ""
        }\`;
      }

      try {
        const res = await fetch(url, { next: { revalidate: 60 } });

        if (!res.ok) throw new Error("YouTube API 요청 실패");

        const { videos, nextPageToken } = await res.json();
        return { videos, nextPageToken };
      } catch (e) {
        console.error("영상을 불러오는데 실패했습니다.", e);
        return { videos: [], nextPageToken: null };
      }
    }
  `,
  streamNest3: `
    const loadMore = useCallback(async () => {
      setLoading(true);
      try {
        const res = await fetchYouTubeVideos(nextPageToken!);
        setVideos((prev) => [...prev, ...res.videos]);
        setNextPageToken(res.nextPageToken);
      } catch (err) {
        console.error("더보기 실패", err);
      } finally {
        setLoading(false);
      }
    }, [nextPageToken]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && nextPageToken && !loading) {
            loadMore();
          }
        },
        { threshold: 1 }
      );

      if (loaderRef.current) observer.observe(loaderRef.current);
      return () => observer.disconnect();
    }, [loadMore, loading, nextPageToken]);
  `,
  myFridge1: `
    // 컴포넌트가 의존하는 인터페이스
    export interface itemService {
      fetchAll(): Promise<Item[]>;
      add(item: Omit<Item, "id">): Promise<Item[]>;
      delete(id: number): Promise<Item[]>;
      updateQuantity(id: number, quantity: number): Promise<Item[]>;
    }
    // 사실 동작하는 구현체는 따로 있음
    export { dbItemService } from "./dbItemService";
    export { localItemService } from "./localItemService";

    //...

    // 컴포넌트에서 선택적으로 사용
    import { localItemService as itemService } from "@/services/itemService";

    //...
    useEffect(() => {
      itemService.fetchAll().then(setItems);
    }, []);

    const handleDelete = async (id: number) => {
      const updated = await itemService.delete(id);
      setItems(updated);
    };

    const handleUpdateQuantity = async (id: number, newQuantity: number) => {
      const updated = await itemService.updateQuantity(id, newQuantity);
      setItems(updated);
    };
  `,
  myFridge2: `
    // 세션 검증후 최신 상태 반영 
    loadUser: async () => {
      try {
        const currentUser = await fetchCurrentUser();
        set({ user: currentUser });
      } catch (err) {
        console.log(err);
        set({ user: null });
      }
    },

    // 클라이언트 요청
    export async function fetchCurrentUser() {
      try {
        const res = await fetch("http://localhost:5000/api/auth/user", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) return null;
        return await res.json();
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
        return null;
      }
    }

    // 서버 응답
    router.get("/user", async (req: Request, res: Response): Promise<void> => {
      if (!req.session.userId) {
        res.status(401).json({ error: "로그인이 필요합니다." });
        return;
      }
      const user = await prisma.user.findUnique({
        where: { id: req.session.userId },
        select: { id: true, name: true, email: true },
      });
      if (!user) {
        res.status(401).json({ error: "유저를 찾을 수 없습니다." });
        return;
      }
      res.json(user);
    });
  `,
  myFridge3: `
    import { create } from "zustand";

    const getInitialNotificationSetting = () => {
      const savedSetting = localStorage.getItem("isNotificationEnabled");
      return savedSetting ? JSON.parse(savedSetting) : true;
    };

    interface NotificationStore {
      notifications: string[];
      addNotification: (message: string) => void;
      removeNotification: (message: string) => void;
      isNotificationEnabled: boolean;
      toggleNotification: () => void;
    }

    export const useNotificationStore = create<NotificationStore>((set) => ({
      notifications: [],
      isNotificationEnabled: getInitialNotificationSetting(),

      // 알림 발생
      addNotification: (message) => {
        set((state) => {
          if (state.notifications.includes(message)) return state;
          return { notifications: [...state.notifications, message] };
        });

        // 5초 뒤 사라짐
        setTimeout(() => {
          set((state) => ({
            notifications: state.notifications.filter((n) => n !== message),
          }));
        }, 5000);
      },

      // 버튼으로 끄기
      removeNotification: (message) => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n !== message),
        }));
      },

      // 알림 기능 활성/비활성
      toggleNotification: () => {
        set((state) => {
          const newSetting = !state.isNotificationEnabled;
          localStorage.setItem("isNotificationEnabled", JSON.stringify(newSetting));
          return { isNotificationEnabled: newSetting };
        });
      },
    }));
  `,
}