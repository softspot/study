## 초성찾기

Unicode


***

## Character Set

- charset
- 문자셋

## ASCII

![](file:///Users/spot/study/doc/choseong/01.png)

## KS C 5601

![](file:///Users/spot/study/doc/choseong/02.png)

## Character Encoding (encoding)

- encoding
- 인코딩

## ASCII

![](file:///Users/spot/study/doc/choseong/03.png)

- A = 0x41

## KS C 5601

![](file:///Users/spot/study/doc/choseong/04.png)

- 0xB0
- 0xC0 + 0x01 = 0xC1
- 걍 = 0xB0C1


***


## Unicode의 출현

- 128 이상은 "나라말싸미 듕궉에 달아~"
- 전 세계적으로 사용하는 모든 문자 집합
- UCS : Universal (Multiple-Octet Coded) Character Set의 subset


## Unicode 개념

- Code Point

- U+0041 : A
- U+ : Unicode
- 0041 : 16진수
- U+AC00 : 가

- 0x10FFFF^2 로서 약 100 만 개 글자를 담을 수 있는 공간
- 현재 10만개


## UCS의 구조

![](file:///Users/spot/study/doc/choseong/05.png)

## 용어

| 용어             | 의미                                                                |
|------------------|---------------------------------------------------------------------|
| Cell             | 한 개의 문자가 할당되는 공간                                        |
| Plane (평면, 판) | 256 x 256 (= 65536) 개 Cell의 묶음 Plane 00 부터 Plane FF 까지 존재 |
| Group            | 256개 Plane의 묶음 Group 00 부터 Group 7F 까지 존재                 |



## Reference
- Unicode 의 이해 - [http://www.novonetworks.com/jamestic/Unicode_1.0.pdf](http://www.novonetworks.com/jamestic/Unicode_1.0.pdf)
- Unicode 이해하기 - [http://www.slideshare.net/parkpd/unicode-4796992](http://www.slideshare.net/parkpd/unicode-4796992)
- 한글 인코딩의 이해 2편: 유니코드와 Java를 이용한 한글 처리 - [http://helloworld.naver.com/helloworld/76650](http://helloworld.naver.com/helloworld/76650)
- 한글(유니코드) 초성 / 중성 / 종성 분리 - [http://warmz.tistory.com/717](http://warmz.tistory.com/717)
