# 간호학 연구·수업 자료실 (MVP 1단계)

간호학 연구 자료와 수업 자료를 게시하는 웹사이트입니다.
지금은 **1단계: 정적 사이트(static site)** 입니다. 서버나 데이터베이스 없이, 미리 만들어 둔 화면 파일만 인터넷에 올리는 방식입니다.

> ### ⚠️ 공개 범위 경고
> **`public/` 폴더에 넣은 파일(PDF 등)은 배포 후 인터넷의 누구나 주소만 알면 볼 수 있습니다.**
> **`src/content/` 폴더의 Markdown 자료 본문도 사이트에 그대로 공개됩니다.**
> **실제 환자 정보, 학생 이름·성적, 미발표 연구 원자료(raw data), IRB 승인 범위를 벗어난 자료는 절대 올리지 마세요.**
> GitHub 저장소를 "Public"으로 만들면 저장소 안의 모든 파일도 공개됩니다. **Private 저장소를 권장합니다.**

---

## 1. 사이트 구성

| 주소 | 내용 |
| --- | --- |
| `/` | 홈: 사이트·연구실·연구자 소개, 최근 자료 |
| `/research` | 연구 자료 목록 (태그로 거르기 가능) |
| `/research/자료이름` | 연구 자료 상세 + 첨부 PDF + 토론 자리 |
| `/teaching` | 수업 자료 목록 (과목명·주차 순) |
| `/teaching/자료이름` | 수업 자료 상세 + 첨부 PDF + 토론 자리 |
| `/guide` | 이용 원칙과 개인정보 안내 |
| 그 밖의 주소 | 404 (페이지를 찾을 수 없음) |

## 2. 폴더 구조

```
├── public/
│   └── files/            ← 첨부 파일(PDF 등). ⚠️ 누구나 볼 수 있음
├── src/
│   ├── components/       ← 화면 부품 (Header, Footer, Discussion, ContentCard 등)
│   ├── pages/            ← 페이지 (Home, Research, Teaching, ContentDetail, Guide, NotFound)
│   ├── content/
│   │   ├── research/     ← 연구 자료 .md 파일
│   │   └── teaching/     ← 수업 자료 .md 파일
│   ├── config/site.js    ← ★ 사이트 이름·연구자 정보 (여기만 고치면 됨)
│   ├── lib/              ← 자료 불러오기 함수 (다음 단계 Firebase 설정도 여기에)
│   └── styles/global.css ← 디자인(색상·글꼴)
├── netlify.toml          ← Netlify 배포 설정
├── .env.example          ← 다음 단계에서 사용할 설정값 예시 (지금은 비어 있음)
└── HOW_TO_ADD_CONTENT.md ← 자료 추가 방법 안내
```

## 3. 사용한 도구와 이유

| 도구 | 역할 |
| --- | --- |
| Vite + React | 사이트를 만들고 빠르게 미리 보는 도구 |
| react-router-dom | 페이지 이동(주소별 화면 전환) |
| react-markdown | Markdown(.md) 글을 웹 화면으로 변환 |
| remark-gfm | Markdown에서 **표(table)**, 체크리스트 등을 쓸 수 있게 해 줌 (연구 방법·결과 요약 표에 필요) |
| yaml | .md 파일 맨 위의 frontmatter(제목·날짜·태그 등)를 읽어 줌. 흔히 쓰는 `gray-matter`는 브라우저에서 추가 설정이 필요해 대신 사용 |

## 4. 로컬(내 컴퓨터)에서 실행하기

1. [Node.js](https://nodejs.org/) **LTS 버전**(22 이상)을 설치합니다.
2. 이 폴더에서 터미널(Mac: 터미널, Windows: 명령 프롬프트 또는 PowerShell)을 엽니다.
3. 처음 한 번만 필요한 라이브러리를 설치합니다.
   ```bash
   npm install
   ```
4. 미리보기 서버를 실행합니다.
   ```bash
   npm run dev
   ```
5. 화면에 나온 주소(보통 `http://localhost:5173`)를 브라우저에서 엽니다. 끄려면 터미널에서 `Ctrl + C`.
6. 배포 전 최종 확인(오류가 없어야 함):
   ```bash
   npm run build
   ```

## 5. 사이트 정보 바꾸기

`src/config/site.js` 파일을 열어 따옴표 안의 글자(사이트 이름, 연구실 소개, 연구자 이름·소속·이메일)만 바꾸면 사이트 전체에 반영됩니다.

## 6. 자료 추가하기

자세한 방법은 [`HOW_TO_ADD_CONTENT.md`](./HOW_TO_ADD_CONTENT.md)를 보세요. 요약하면:
`src/content/research/` 또는 `src/content/teaching/` 폴더에 `.md` 파일을 하나 추가하면 목록에 자동으로 나타납니다.

## 7. GitHub에 올리기

### 방법 A: GitHub Desktop (추천, 명령어 없이)
1. [GitHub Desktop](https://desktop.github.com/)을 설치하고 GitHub 계정으로 로그인합니다.
2. 메뉴 **File → Add local repository…** 에서 이 프로젝트 폴더를 선택합니다.
   (Git 저장소가 아니라는 안내가 나오면 **create a repository** 를 눌러 만듭니다.)
3. 왼쪽 아래 Summary 칸에 `첫 업로드` 처럼 메모를 쓰고 **Commit to main** 을 누릅니다.
4. 위쪽 **Publish repository** 를 누르고, **Keep this code private** 를 체크한 채 게시합니다.

### 방법 B: 명령어
1. github.com에서 오른쪽 위 **+ → New repository** → 이름 입력 → **Private** 선택 → *README 추가하지 않음* → **Create repository**.
2. 프로젝트 폴더의 터미널에서 차례로 실행합니다 (`내아이디/저장소이름`은 바꾸세요).
   ```bash
   git init
   git add .
   git commit -m "첫 업로드"
   git branch -M main
   git remote add origin https://github.com/내아이디/저장소이름.git
   git push -u origin main
   ```

`node_modules`, `dist`, `.env`, `.env.local` 은 `.gitignore`에 등록되어 있어 자동으로 제외됩니다.

## 8. Netlify로 배포하기

1. [netlify.com](https://www.netlify.com/)에 GitHub 계정으로 가입·로그인합니다 (무료 플랜).
2. **Add new site → Import an existing project → GitHub** 를 선택하고, Netlify가 저장소에 접근하도록 허용합니다.
3. 방금 올린 저장소를 고릅니다.
4. 빌드 설정은 `netlify.toml`이 자동으로 채웁니다. 확인만 하세요.
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy** 를 누르고 1~2분 기다리면 `https://임의의이름.netlify.app` 주소가 생깁니다.
6. **Site configuration → Change site name** 에서 주소 앞부분을 바꿀 수 있습니다.
7. 이후에는 GitHub에 새 내용을 올릴 때마다 Netlify가 **자동으로 다시 배포**합니다.

> 새로고침해도 404가 나지 않도록 `netlify.toml`에 SPA 리다이렉트(`/* → /index.html 200`)가 설정되어 있습니다.

## 9. Google 로그인 (Firebase Authentication)

로그인 코드는 들어 있지만, **Firebase 설정값을 넣기 전까지 로그인 버튼은 "준비 중"으로 비활성 상태**이고 사이트의 나머지는 그대로 동작합니다.

| 파일 | 역할 |
| --- | --- |
| `src/lib/firebase.js` | Firebase 연결 (설정값은 환경 변수에서 읽음) |
| `src/lib/auth.js` | Google 팝업 로그인·로그아웃, 오류 안내 문구 |
| `src/lib/useAuth.js` | 현재 로그인한 사용자 확인 |
| `src/components/LoginButton.jsx` | 상단 메뉴의 로그인 버튼 |

**로그인 방식:** 팝업(`signInWithPopup`)만 사용하며, **사용자가 버튼을 클릭했을 때만** 팝업을 엽니다.
- 팝업이 차단되면 → "브라우저 주소창 오른쪽의 팝업 차단 아이콘을 눌러 이 사이트의 팝업을 허용해 주세요" 안내
- 사용자가 팝업을 닫으면 → 안내 없이 조용히 원래 상태로 돌아감

### 설정 방법
1. [Firebase 콘솔](https://console.firebase.google.com/)에서 프로젝트를 만들고 **웹 앱**을 추가합니다.
2. **Authentication → 로그인 방법(Sign-in method)** 에서 **Google** 을 사용 설정합니다.
3. **Authentication → 설정 → 승인된 도메인(Authorized domains)** 에 Netlify 주소(`○○.netlify.app`)를 추가합니다. (`localhost`는 기본 등록됨)
4. `.env.example` 을 복사해 `.env.local` 로 이름을 바꾸고, Firebase 웹 앱 설정값을 붙여 넣습니다.
5. Netlify **Site configuration → Environment variables** 에 같은 이름(`VITE_FIREBASE_...`) 4개를 입력하고 다시 배포(**Deploys → Trigger deploy**)합니다.

> Firebase 웹 설정값(apiKey 등)은 원래 브라우저에 공개되는 값이라 비밀번호는 아닙니다. 그래도 저장소에는 올리지 않고, 실제 보호는 승인된 도메인과 (다음 단계의) 보안 규칙으로 합니다.

## 10. 다음 단계에서 할 일

- **승인된 대학원생만 허용:** 로그인한 사람 중 승인 명단에 있는 사람만 토론에 참여하도록 합니다. 지금은 Google 계정이 있으면 누구나 로그인됩니다.
- **토론 영역:** `src/components/Discussion.jsx` 의 내용을 실제 토론 기능으로 교체합니다.
