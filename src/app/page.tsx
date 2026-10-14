import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-20 md:py-24 bg-sky-50 text-blue-950">
      <div className="w-full max-w-xl p-8 sm:p-12 md:p-14 bg-white/95 rounded-3xl shadow-xl shadow-sky-900/5 border border-sky-100 text-center flex flex-col items-center">
        {/* 상단 뱃지 */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-200 mb-6 sm:mb-7">
          Next.js App Router
        </div>
        
        {/* 메인 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-blue-950 leading-snug break-keep mb-7 sm:mb-9">
          안녕하세요, <span className="text-teal-600">김가람</span>입니다
        </h1>

        {/* 프로필 사진 (제목과 사진 사이, 사진과 소개 문장 사이 넉넉한 간격) */}
        <div className="mb-8 sm:mb-10">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
            <Image
              src="/my-photo.jpg"
              alt="김가람 프로필 사진"
              width={128}
              height={128}
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-teal-200/80"
              priority
            />
          </div>
        </div>
        
        {/* 소개 및 설명 문구 */}
        <p className="text-sm sm:text-base text-blue-950/80 leading-relaxed max-w-md break-keep mb-8 sm:mb-10">
          TypeScript, App Router, Tailwind CSS 설정이 완료되었습니다.<br className="hidden sm:inline" />{" "}
          <code className="text-xs bg-sky-100/80 text-blue-950 px-2 py-0.5 rounded font-mono border border-sky-200/70 inline-block my-1 sm:my-0">
            src/app/page.tsx
          </code>
          를 수정하여 작업을 시작하세요!
        </p>

        {/* 하단 기술 스택 카드 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-sky-100 text-xs">
          <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
            <p className="font-semibold text-blue-950">TypeScript</p>
            <p className="text-blue-900/60 text-[11px] sm:mt-0.5">타입 안전성</p>
          </div>
          <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
            <p className="font-semibold text-blue-950">App Router</p>
            <p className="text-blue-900/60 text-[11px] sm:mt-0.5">차세대 라우팅</p>
          </div>
          <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
            <p className="font-semibold text-blue-950">Tailwind CSS</p>
            <p className="text-blue-900/60 text-[11px] sm:mt-0.5">유틸리티 스타일</p>
          </div>
        </div>
      </div>
    </main>
  );
}
