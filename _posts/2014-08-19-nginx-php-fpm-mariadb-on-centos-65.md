---
layout: post
title: "CentOS 6.5 上安装 Nginx + PHP-FPM + MariaDB"
category: Linux
tags: [Nginx, PHP, PHP-FPM, MariaDB]
---

letbox 上用优惠卷购置了一款 vps，最终 **$ 0.01** 成交，直接上 CentOS 6.5，想搭建一个 web 应用，结果发现，终于可以摆脱手动编译了，社区维护了各种源，一些紧急漏洞也不用担心了，再也不用去 diff 个补丁，然后苦逼的去编译，直接 yum update。

废话不多说，ssh 进去:

<!-- more -->
#### 一. Nginx

Nginx 的源直接由 nginx.org 来维护

    # rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    # yum install -y nginx

顺带说下，两进制包默认的 web 目录为 `/usr/share/nginx/html`，怕麻烦的话直接软链接到 `/var/www` 下

    # ln -sf /usr/share/nginx/html /var/www/

**在 CentOS 7 中，也可以使用 Fedora Project 的 epel (Extra Packages for Enterprise Linux) 源**

    # rpm -ivh http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
    # yum install -y nginx

#### 二. PHP-FPM

可以直接 yum 安装了，由 CentOS 社区维护

    # yum install -y php php-fpm

当然你也可能需要 PHP 其他的 mode

    # yum install -y php-gd php-mbstring php-xml php-mysql

至于 php-mcrypt 同样需要 epel 源，根据你 Centos 版本，安装对应的 epel

    # rpm -ivh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
    # yum install php-mcrypt

顺带 php-pecl-apcu 也安装吧

    # yum install php-pecl-apcu

#### 三. MariaDB

mariadb.org 社区维护，增加一个 MariaDB.repo

    # touch /etc/yum.repos.d/MariaDB.repo

填入如下内容

```
[mariadb]
name =MariaDB
baseurl = http://yum.mariadb.org/10.0/centos6-x86
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

安装

    # yum install -y MariaDB-server MariaDB-client

**CentOS 7 下，可以直接安装，而不用添加其他源**

配置就不说了，想来各位应该都有自己的一套备份。

参考：

- [https://mariadb.com/kb/en/mariadb/documentation/getting-started/mariadb-binary-packages/installing-mariadb-rpm-files/installing-mariadb-with-yum/](https://mariadb.com/kb/en/mariadb/documentation/getting-started/mariadb-binary-packages/installing-mariadb-rpm-files/installing-mariadb-with-yum/)
- [http://nginx.org/en/linux_packages.html](http://nginx.org/en/linux_packages.html)
