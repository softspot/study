## solr

간단한 서비스 검색 따위~


***


## 

![](http://softspot.github.io/study/doc/solr/01.png)

## download

[http://mirror.apache-kr.org/lucene/solr/4.2.1/](http://mirror.apache-kr.org/lucene/solr/4.2.1/)


***


## quick start

    tar xvzf solr-4.2.1.tgz
    cd solr-4.2.1/example/
    java -jar start.jar

    (...)
    2013-04-30 19:47:05.538:INFO:oejs.AbstractConnector:Started SocketConnector@0.0.0.0:8983

## open url

    http://localhost:8983/solr/

![](http://softspot.github.io/study/doc/solr/02.png)


***

## collection1

![](http://softspot.github.io/study/doc/solr/03.png)


## add docs

    cd exampledocs/
    java -jar post.jar solr.xml

![](http://softspot.github.io/study/doc/solr/04.png)


## query

- \*.*
- keyword:solr
- cat:software


***


## KoreanAnalyzer

[http://cafe.naver.com/korlucene/850](http://cafe.naver.com/korlucene/850)


## setting

* copy koreananalyzer.4x-20130409.jar


    solr-4.2.1/example/solr-webapp/webapp/WEB-INF/lib

    
* solr-4.2.1/example/solr/collection1/conf/schema.xml

![](http://softspot.github.io/study/doc/solr/05.png)


## schema.xml 적당히 수정


![](http://softspot.github.io/study/doc/solr/06.png)


## reference

[http://lucene.apache.org/solr/4_0_0/tutorial.html](http://lucene.apache.org/solr/4_0_0/tutorial.html)
