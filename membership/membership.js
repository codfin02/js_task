// 함수 정의: 입력값 검증
function validateInput(value, type) {
  if (!value) {
    return `${type}을(를) 입력해주세요.`;
  }
  return ''; // 문제 없으면 빈 문자열 반환
}

// 함수 정의: 가입 처리 (예시)
function registerUser(id, pw, email) {
  console.log('가입 정보:', { id, pw, email });
  return true; // 성공 여부 반환
}

// 폼 제출 이벤트 핸들러
const form = document.getElementById('signupForm');
form.addEventListener('submit', event => {
  event.preventDefault(); // 페이지 리로드 방지

  const userId   = document.getElementById('userId').value.trim();
  const password = document.getElementById('password').value;
  const email    = document.getElementById('email').value.trim();

  // 검증
  let err = validateInput(userId, '아이디')
         || validateInput(password, '비밀번호')
         || validateInput(email, '이메일');

  if (err) {
    alert(err);
    return;
  }

  // 가입 처리
  if (registerUser(userId, password, email)) {
    alert('회원가입이 완료되었습니다!');
    form.reset();
  } else {
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
  }
});
