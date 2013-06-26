## 초성찾기

Unicode


***

## Character Set

- charset
- 문자셋

## ASCII

![](http://softspot.github.io/study/doc/choseong/01.png)

## KS C 5601

![](http://softspot.github.io/study/doc/choseong/02.png)

## Character Encoding (encoding)

- encoding
- 인코딩

## ASCII

![](http://softspot.github.io/study/doc/choseong/03.png)

- A = 0x41

## KS C 5601

![](http://softspot.github.io/study/doc/choseong/04.png)

- 0xB0
- 0xC0 + 0x01 = 0xC1
- 걍 = 0xB0C1


***


## Unicode의 출현

- 128 이상은 "나라말싸미 듕궉에 달아~"
- 전 세계적으로 사용하는 모든 문자 집합
- UCS : Universal (Multiple-Octet Coded) Character Set의 subset


## UCS의 구조

![](http://softspot.github.io/study/doc/choseong/05.png)

## UCS의 구조 - 용어

- Cell :             한 개의 문자가 할당되는 공간
- Plane (평면, 판) :  256 x 256 (= 65536) 개 Cell의 묶음 Plane 00 부터 Plane FF 까지 존재
- Group :            256개 Plane의 묶음 Group 00 부터 Group 7F 까지 존재
- 256 x 256 x 256 x 128 = 약 20억


## Unicode 개념

- Code Point

- U+0041 : A
    - U+ : Unicode
    - 0041 : 16진수
- U+AC00 : 가
- 0x10FFFF^2 로서 약 100 만 개 글자를 담을 수 있는 공간
- 현재 10만개


## Unicode 체계

- BMP(Basic Multilingual Plane) - 최초 65536개의 문자 할당 영역
- Group00중 Plane00~Plane16까지 사용
- 17 x 65536 = 약 100만개

## Code Point

![](http://softspot.github.io/study/doc/choseong/06.png)

- Unicode에서는 Group 00 하나만 사용하므로 Group 표기는 생략
- Plane이 00인 경우도 Plane 값은 생략하고 Cell 값만 표기
- Plane 번호 5비트, Cell 번호 16 (0000 ~ 10FFFF)
- 5bit + 16bit = 21bit

***

## Unicode Encoding

![](http://softspot.github.io/study/doc/choseong/07.png)


## UTF-32

![](http://softspot.github.io/study/doc/choseong/08.png)


## UTF-16

![](http://softspot.github.io/study/doc/choseong/09.png)


## UTF-8 8bit ~ 16bit

![](http://softspot.github.io/study/doc/choseong/10.png)

## UTF-8 24bit ~ 32bit

![](http://softspot.github.io/study/doc/choseong/11.png)


## 예

![](http://softspot.github.io/study/doc/choseong/12.png)

    AC00

    10101100 00000000

    1010 110000 000000

    11101010 10110000 10000000
    234 176 128




***

## 한글

![](http://softspot.github.io/study/doc/choseong/13.png)

## 초성, 중성, 종성

- 한 = 'ㅎ','ㅏ','ㄴ'
- 18, 0, 4
- U+AC00 + ((18 x 21) + 0) x 28 + 4 = U+AC00 + U+295C = U+D55C
- ① = code - U+AC00
- ①의 값을 (21 x 28)로 나눈 몫은 초성
- ①의 값을 (21 x 28)로 나눈 나머지를, 28로 나눈 몫은 중성
- ①의 값을 28로 나눈 나머지는 종성


## 구현

    private static final char[] CHOSEONG_LIST = {
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 
        'ㅅ', 'ㅆ', 'ㅇ' , 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    };
    private static final int BASE_CODE = 44032; //0xAC00
    private static final int CHOSEONG = 588;
    public static String detectChoseong(String typo) {
        String result = "";
        for (int i = 0; i < typo.length(); i++) {
            char compareValue = typo.charAt(i);

            if (compareValue >= BASE_CODE) {
                int base = compareValue - BASE_CODE;
                int c1 = base / CHOSEONG;
                result += StringUtils.fromChar(CHOSEONG_LIST[c1]);
            } else if(StringUtils.fromChar(compareValue).matches("[0-9a-zA-Z]")) {
                result += StringUtils.fromChar(compareValue).toLowerCase();
            }
        }
        return result;
    }
***

## Reference
- Unicode 의 이해 - [http://www.novonetworks.com/jamestic/Unicode_1.0.pdf](http://www.novonetworks.com/jamestic/Unicode_1.0.pdf)
- Unicode 이해하기 - [http://www.slideshare.net/parkpd/unicode-4796992](http://www.slideshare.net/parkpd/unicode-4796992)
- 한글 인코딩의 이해 2편: 유니코드와 Java를 이용한 한글 처리 - [http://helloworld.naver.com/helloworld/76650](http://helloworld.naver.com/helloworld/76650)
- 한글(유니코드) 초성 / 중성 / 종성 분리 - [http://warmz.tistory.com/717](http://warmz.tistory.com/717)
