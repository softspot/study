## phpbrew

씹기전에 검토는 해보자!


***


## Why?

![](file:///Users/spot/study/doc/phpbrew/01.png)


## 요즘방식...

[phptherightway](http://www.phptherightway.com/)

![](file:///Users/spot/study/doc/phpbrew/02.png)


## 내 환경

    DoSung-ui-MacBook-Air:~ spot$ php -v
    PHP 5.3.15 with Suhosin-Patch (cli) (built: Aug 24 2012 17:45:44)
    Copyright (c) 1997-2012 The PHP Group
    Zend Engine v2.3.0, Copyright (c) 1998-2012 Zend Technologies


***


## phpbrew

* [link](https://github.com/c9s/phpbrew)
* phpbrew builds and installs multiple version php(s) in your $HOME directory.
* phpbrew also manage the environment variables, so you can *use*, *switch* php version whenever you need.


## Requirement

    $ brew install automake autoconf curl pcre re2c mhash libtool icu4c gettext jpeg libxml2 mcrypt gmp libevent

* PHP5.3
* curl
* gcc, binutil, autoconf, libxml, zlib, readline


## Install phpbrew

    $ curl -O https://raw.github.com/c9s/phpbrew/master/phpbrew
    $ chmod +x phpbrew
    $ sudo cp phpbrew /usr/bin/phpbrew


***


## Start

    $ phpbrew init

    $ source ~/.phpbrew/bashrc

    $ phpbrew known
    Available stable versions:
        php-5.3.10
        php-5.3.9
        php-5.3.8
        php-5.3.7

    $ phpbrew install php-5.4.0 +default

## variants

    $ phpbrew variants
    Variants:
      all, apxs2, bcmath, bz2, calendar, cgi, cli, ctype, dba, debug, dom, embed,
      exif, fileinfo, filter, fpm, ftp, gcov, gd, gettext, hash, iconv, icu,
      imap, intl, ipc, ipv6, json, kerberos, mbregex, mbstring, mcrypt, mhash,
      mysql, openssl, pcntl, pcre, pdo, pgsql, phar, posix, readline, session,
      soap, sockets, sqlite, tidy, tokenizer, xml_all, xmlrpc, zip, zlib


    Virtual variants:
      dbs: sqlite, mysql, pgsql, pdo
      mb: mbstring, mbregex
      default: bcmath, bz2, calendar, cli, ctype, dom, fileinfo, filter, ipc,
      json, mbregex, mbstring, mhash, mhash, pcntl, pcre, pdo, phar, posix,
      readline, sockets, tokenizer, xml_all, zip, bz2


    Using variants to build PHP:

      phpbrew install php-5.3.10 +default
      phpbrew install php-5.3.10 +mysql +pdo
      phpbrew install php-5.3.10 +mysql +pdo +apxs2
      phpbrew install php-5.3.10 +mysql +pdo +apxs2=/usr/bin/apxs2


## Example

    $ php -v
    PHP 5.3.15 with Suhosin-Patch (cli) (built: Aug 24 2012 17:45:44)
    Copyright (c) 1997-2012 The PHP Group
    Zend Engine v2.3.0, Copyright (c) 1998-2012 Zend Technologies

    $ source .phpbrew/bashrc

    $ phpbrew list
    Installed versions:
    * (system)
      php-5.4.14       (/Users/spot/.phpbrew/php/php-5.4.14)
                       +dom+xml_all+mysql+mbstring+mbregex

    $ phpbrew use 5.4.14        # or    phpbrew use php-5.4.14

    $ php -v
    PHP 5.4.14 (cli) (built: Apr 16 2013 14:38:57)
    Copyright (c) 1997-2013 The PHP Group
    Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies


***


## Goal

    $ cd (my php project)

    $ php -S localhost:8080
    PHP 5.4.14 Development Server started at Tue Apr 16 16:18:35 2013
    Listening on http://localhost:8080
    Document root is /Users/spot/pk_dic
    Press Ctrl-C to quit.
