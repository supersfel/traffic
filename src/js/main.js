const typeAnalyzeList = [
  { content: "CCTV", isCheck: false }, // CCTV 영상분석 옵션 초기화
  { content: "교통사고", isCheck: false }, // 교통사고 영상분석 옵션 초기화
];

const locationAnalyzeList = [
  { content: "서울", isCheck: false }, // 서울 지역 옵션 초기화
  { content: "부산", isCheck: false }, // 부산 지역 옵션 초기화
  { content: "인천", isCheck: false }, // 인천 지역 옵션 초기화
  { content: "대구", isCheck: false }, // 대구 지역 옵션 초기화
  { content: "광주", isCheck: false }, // 광주 지역 옵션 초기화
  { content: "대전", isCheck: false }, // 대전 지역 옵션 초기화
  { content: "울산", isCheck: false }, // 울산 지역 옵션 초기화
];

// 영상분석 종류 선택
function showTypeAnalyzeList() {
  const htmlEl = document.querySelector(".left .type form");

  // 옵션 목록을 HTML 요소로 변환
  const htmlAry = typeAnalyzeList.map(
    (el, idx) => `<div class="input-box">
    ${el.content} 영상현황
    <input type="checkbox" key=${idx} onClick="clickTypeAnalyze(${idx})" ${
      el.isCheck ? "checked" : ""
    } />
      </div>`
  );
  htmlEl.innerHTML = "";

  // HTML에 옵션 목록 추가
  htmlAry.forEach((el) => {
    htmlEl.innerHTML += el;
  });
}
showTypeAnalyzeList();

// 영상분석 종류 선택 시 호출되는 함수
function clickTypeAnalyze(idx) {
  for (let i = 0; i < typeAnalyzeList.length; i++) {
    typeAnalyzeList[i].isCheck = idx === i ? true : false; // 선택한 옵션을 활성화, 나머지는 비활성화
  }
  showTypeAnalyzeList(); // 변경된 옵션을 다시 표시
}

// 지역종류 선택
function showLocationAnalyzeList() {
  const htmlEl = document.querySelector(".left .location form");

  // 지역 옵션 목록을 HTML 요소로 변환
  const htmlAry = locationAnalyzeList.map(
    (el, idx) => `<div class="input-box">
      ${el.content}
      <input type="checkbox" key=${idx}  onClick="clickLocationAnalyze(${idx})" ${
      el.isCheck ? "checked" : ""
    }/>
        </div>`
  );
  htmlEl.innerHTML = "";

  // HTML에 지역 옵션 목록 추가
  htmlAry.forEach((el) => {
    htmlEl.innerHTML += el;
  });
}
showLocationAnalyzeList();

// 지역분석 종류 선택 시 호출되는 함수
function clickLocationAnalyze(idx) {
  for (let i = 0; i < locationAnalyzeList.length; i++) {
    locationAnalyzeList[i].isCheck = idx === i ? true : false; // 선택한 옵션을 활성화, 나머지는 비활성화
  }
  showLocationAnalyzeList(); // 변경된 지역 옵션을 다시 표시
}

// 페이지 이동 함수
function moveAnalyzePage() {
  const typeIdx = typeAnalyzeList.map((el) => el.isCheck).indexOf(true); // 선택한 영상분석 종류의 인덱스
  const locationIdx = locationAnalyzeList.map((el) => el.isCheck).indexOf(true); // 선택한 지역의 인덱스

  if (typeIdx === -1 || locationIdx === -1) {
    alert("모든 버튼을 체크해주세요"); // 영상분석 종류와 지역 중 하나라도 선택되지 않았을 때 경고 메시지 표시
    return;
  }

  const type = typeAnalyzeList[typeIdx].content; // 선택한 영상분석 종류
  const location = locationAnalyzeList[locationIdx].content; // 선택한 지역
  window.location.href = `/src/html/analyze.html?type=${type}&location=${location}`; // 분석 페이지로 이동
}
