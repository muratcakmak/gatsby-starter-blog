---
title: Mysql notes to myself[WIP]
date: "2019-06-26T06:00:03.284Z"
description: Some definitions I run into while working on some NLP work
---

# Mysql commands

## Upgrade

```bash
mysql_upgrade
mysql_upgrade --protocol=tcp -P 3306 --user=root --host=127.0.0.1 --skip-version-check --force -uroot -p
```

## Install current mysql version

```bash
brew install mysql
```

## Start agent for current version of mysql (including on login)

```bash
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
```

# Install the different version of mysql

## Find older mysql versions

```bash
brew search mysql
```

## Install older mysql version

```bash
brew install homebrew/versions/mysql@5.7
```

## Start agent for older version of mysql (including on login)

```bash
ln -sfv /usr/local/opt/mysql@5.7./*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql@5.7.plist
```

Dump mysql

```bash
mysqldump --all-databases -uroot > dump.sql
```

Use dump db

```bash
mysql -u username -p -h localhost DATA-BASE-NAME < data.sql
```

```bash
mysql -u root -p
create database mydb;
use mydb;
source db_backup.dump;
```

# Uninstall MySql on a Mac OS X

[Uninstall Mysql MacOS](https://community.jaspersoft.com/wiki/uninstall-mysql-mac-os-x)

[Stopping Background Services with Homebrew](https://thoughtbot.com/blog/starting-and-stopping-background-services-with-homebrew)
