## memcached

cache의 대명사


***


## Overview

* memory + cache ?
* [LiveJournal](http://code.livejournal.org/trac)(1999)을 개발한 Brad Fitzpatrick이 개발
* 아마존, 위키피디아, 소스포지, 트위터에서 사용


***


## Dependencies

* libevent

## Install (Mac)
    brew install libevent
    brew install memcached

## Quick start

    memcached -u root -d -m 1024 -l 127.0.0.1 -p 11211 -P /tmp/memcached.pid

    kill `cat /tmp/memcached.pid`


##  Test

    telnet localhost 11211

    stats settings
    STAT maxbytes 1073741824
    STAT maxconns 1024
    STAT tcpport 11211
    STAT udpport 11211
    STAT inter localhost
    STAT verbosity 0

    (..중략..)

    STAT tcp_backlog 1024
    STAT binding_protocol auto-negotiate
    STAT auth_enabled_sasl no
    STAT item_size_max 1048576
    STAT maxconns_fast no
    STAT hashpower_init 0
    STAT slab_reassign no
    STAT slab_automove no
    END


***


## With PHP

* memcache
* *memcached*

    ```
    wget https://launchpad.net/libmemcached/1.0/1.0.10/+download/libmemcached-1.0.10.tar.gz
    tar xvfz libmemcached-1.0.10.tar.gz
    cd libmemcached-1.0.10
    ./configre
    make; sudo make install

    wget http://pecl.php.net/get/memcached-2.1.0.tgz
    tar xvfz memcached-2.1.0.tgz
    cd memcached-2.1.0
    phpize
    ./configure
    make; sudo make install

    sudo vi /etc/php.d/memcached.ini

    extension=memcached.so
    ```


## Graph - stats

* memcache.php stats like apc.php
* [link](http://livebookmark.net/journal/2008/05/21/memcachephp-stats-like-apcphp/)

![](http://livebookmark.net/journal/wp-content/uploads/2008/05/memcache.png)

## key & value

* md5
* json
* igbinary

*** 

## reference

* [http://www.solanara.net/solanara/memcached](http://www.solanara.net/solanara/memcached)
* [http://www.php.net/manual/en/book.memcached.php](http://www.php.net/manual/en/book.memcached.php)
* [http://livebookmark.net/journal/2008/05/21/memcachephp-stats-like-apcphp/](http://livebookmark.net/journal/2008/05/21/memcachephp-stats-like-apcphp/)
* [http://blog.1day1.org/476](http://blog.1day1.org/476)
