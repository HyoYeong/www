# 대제목: 웹 관련 기술
## 중제목: 프론트엔드 기술
### 소제목 HTML
 >HTML이란...
 1. HTML Tag
 2. Head Tag
 3. Body Tag

### css
 * 속성자
  * 속성

[github 계정]
(https://www.naver.com/hyoyeong)

'''javascripts



      $(function() {
          $(".main-menu > li").hover(
              function() {
                  $(this).children("ul").css("display", "block");
              },
              function() {
                  $(this).children("ul").css("display", "none");
              });
          $(".main-menu span").focusin(
              function() {
                  $(this).siblings("ul").css("display", "block");
              });
          $(".main-menu ul li:last-child a").focusout(
              function() {
                  $(this).parent().parent().css("display", "none");

              }
          );
});



'''
| 늉  | 늉늉  |  뇽 |  녕 |  고양이 |
|---|---|---|---|---|
|  헐 | 헐  |헐   |고양   | 고고양  |

<img src = "http://www.cantabriatic.com/wp-content/uploads/2016/10/markdown-512.png" width="150px" align="right"> 

~~이것은 마크다운 문법입니다.~~
**취소라인입니다**
*별이 하나입니다.*
