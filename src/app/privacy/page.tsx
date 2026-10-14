import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 가람 출석체크",
  description: "가람 출석체크 서비스의 개인정보처리방침 및 방문 통계 수집 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-blue-950 px-6 py-12 sm:px-10 sm:py-16">
      <div className="max-w-3xl mx-auto bg-white/95 rounded-3xl shadow-xl shadow-sky-900/5 border border-sky-100 p-8 sm:p-12 md:p-14">
        {/* 상단 네비게이션 */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-full hover:bg-teal-100 transition-colors"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>

        {/* 제목 */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 mb-2">
          개인정보처리방침 (초안)
        </h1>
        <p className="text-xs text-blue-950/60 mb-8">
          시행일자: 2026년 10월 14일
        </p>

        {/* 확인 및 수정 안내 박스 */}
        <div className="mb-8 p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 leading-relaxed">
          <p className="font-bold text-amber-900 mb-1">
            💡 직접 확인하고 수정할 내용 안내
          </p>
          <ul className="list-disc list-inside space-y-1 text-amber-900/90 text-xs">
            <li><strong>운영자 정보</strong>: 제6조의 운영자 이름 및 문의 이메일 주소를 실제 본인 정보로 입력해주세요.</li>
            <li><strong>추가 기능 수집 여부</strong>: 추후 회원가입, 출석부 저장 등 개인정보(이름, 학번 등)를 직접 입력받게 되면 수집 항목을 추가해야 합니다.</li>
            <li><strong>시행일자</strong>: 실제 서비스를 공개하고 운영을 시작한 날짜로 갱신해주세요.</li>
          </ul>
        </div>

        <div className="space-y-6 text-sm text-blue-950/85 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제1조 (목적)
            </h2>
            <p>
              본 개인정보처리방침은 <strong>가람 출석체크</strong>(이하 &apos;사이트&apos;)가 이용자의 개인정보를 보호하고, 관련 법령을 준수하며, 방문 통계 분석에 사용되는 정보 수집 및 이용 목적을 안내하기 위해 작성되었습니다.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제2조 (수집하는 정보 및 수집 방법)
            </h2>
            <p className="mb-2">
              본 사이트는 별도의 회원가입 없이 이용할 수 있으며, 이용자의 성명, 전화번호, 주민등록번호 등 직접적인 식별 정보를 수집하지 않습니다.
            </p>
            <p className="mb-2">
              단, 서비스 이용 환경 개선 및 방문 통계 분석을 위해 <strong>구글 애널리틱스(Google Analytics 4)</strong>를 사용하며, 사이트 이용 시 아래와 같은 비식별 정보가 자동으로 생성·수집될 수 있습니다.
            </p>
            <ul className="list-disc list-inside bg-sky-50/50 p-3 rounded-xl space-y-1 text-xs">
              <li>접속 기기 및 브라우저 유형, 운영체제(OS) 정보</li>
              <li>방문 일시, 체류 시간, 페이지 뷰 등 웹사이트 이용 기록</li>
              <li>IP 주소 (구글 애널리틱스를 통해 익명화 및 비식별 처리됨)</li>
              <li>쿠키(Cookie)를 통해 생성된 방문 통계 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제3조 (구글 애널리틱스 이용 및 쿠키 안내)
            </h2>
            <p className="mb-2">
              사이트는 방문자의 사이트 이용 패턴을 파악하여 더 나은 사용자 경험을 제공하기 위해 구글(Google LLC)이 제공하는 웹 분석 도구인 구글 애널리틱스를 사용합니다.
            </p>
            <p className="mb-2">
              구글 애널리틱스는 이용자의 정보를 수집하기 위해 쿠키(Cookie)를 사용합니다. 이용자는 언제든지 쿠키 저장을 거부하거나 삭제할 수 있습니다.
            </p>
            <div className="bg-sky-50/50 p-3 rounded-xl text-xs space-y-1.5">
              <p className="font-semibold text-blue-950">📌 통계 수집 거부(Opt-out) 방법:</p>
              <p>
                1. <strong>브라우저 설정</strong>: 웹 브라우저의 옵션에서 모든 쿠키를 허용하거나, 쿠키 저장 시 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
              </p>
              <p>
                2. <strong>구글 애널리틱스 차단 부가기능</strong>: 구글에서 제공하는{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline font-medium"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                을 설치하여 데이터 전송을 차단할 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제4조 (개인정보의 보유 및 파기)
            </h2>
            <p>
              사이트는 직접적인 개인정보를 별도 데이터베이스에 저장하거나 보유하지 않습니다. 구글 애널리틱스를 통해 수집된 통계 데이터는 구글의 데이터 보유 정책(기본 2개월 또는 14개월 등 설정값)에 따라 보관 후 자동으로 파기됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제5조 (개인정보의 제3자 제공 및 처리위탁)
            </h2>
            <p className="mb-2">
              사이트는 이용자의 개인정보를 제3자에게 판매하거나 무단 제공하지 않습니다. 다만 통계 분석을 위해 아래와 같이 업무를 위탁하고 있습니다.
            </p>
            <ul className="list-disc list-inside bg-sky-50/50 p-3 rounded-xl text-xs space-y-1">
              <li><strong>수탁자</strong>: Google LLC</li>
              <li><strong>위탁 업무 내용</strong>: 웹사이트 방문자 통계 분석 및 서비스 이용 행태 파악</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제6조 (운영자 정보 및 문의처)
            </h2>
            <div className="p-3.5 bg-sky-50/60 border border-sky-100 rounded-xl text-xs space-y-1.5">
              <p>사이트 운영 및 개인정보 관련 문의사항은 아래 연락처로 문의해주시기 바랍니다.</p>
              <p>• <strong>서비스명</strong>: 가람 출석체크</p>
              <p>• <strong>운영자</strong>: 김가람</p>
              <p>• <strong>문의 이메일</strong>: [이메일 주소를 입력해주세요, 예: contact@example.com]</p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-blue-950 mb-2">
              제7조 (방침 변경 및 고지)
            </h2>
            <p>
              본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 변경사항의 시행 최소 7일 전부터 웹사이트 공지사항 또는 사이트 하단을 통해 고지할 것입니다.
            </p>
          </section>
        </div>

        {/* 하단 돌아가기 버튼 */}
        <div className="mt-10 pt-6 border-t border-sky-100 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
