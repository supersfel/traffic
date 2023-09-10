const curUrl = new URL(window.location.href);

// URLSearchParams 객체 생성
const searchParams = curUrl.searchParams;

// 쿼리 매개변수 가져오기
const urlQuery = {
  type: searchParams.get("type"),
  location: searchParams.get("location"),
};

(function showAnalyzeTitleArea() {
  const type = document.querySelector(".analyze__title-area .type");
  const location = document.querySelector(".analyze__title-area .location");

  type.innerText = `${urlQuery.type} 영상현황`;
  location.innerText = urlQuery.location;
})();

const video = document.getElementById("video");

// hls.js 인스턴스를 생성합니다.
const hls = new Hls();

// 동영상 URL을 설정합니다.
const videoUrl =
  "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";

// 비디오 요소와 hls.js 인스턴스를 연결합니다.
hls.attachMedia(video);

// 동영상을 로드합니다.
hls.loadSource(videoUrl);

// hls.js 이벤트 리스너를 추가합니다.
hls.on(Hls.Events.MANIFEST_PARSED, function () {
  // 동영상이 준비되면 비디오를 재생합니다.
  video.play();
});
