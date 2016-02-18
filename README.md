# node-express-application-skeleton
complete application skeleton with all you need

## Table of Contents

0. [Introduction](#introduction)
1. [Getting started](#getting-started)
    1. [download Source](#download-source)
    2. [change application name](#change-application-name)
    3. [setup development environment](#setup-development-environment)
    4. [run tests](#run-tests)
    5. [start application](#start-application) 
2. [Application Documentation](#application-documentation)
    1. [directory structure](#directory-structure)
    2. [application modules](#application-modules)
    3. [database models](#database-models)
    4. [asset pipeline](#asset-pipeline)
3. [Contrinous Integration](#contrinous-integration)
    1. [recommendations](#recommendations)
    2. [badges](#badges)
    3. [test driven development](#test-driven-development)
    4. [working in big teams](#working-in-big-teams)
4. [Deployment](#deployment)
    1. [own server with nginx](#own-server-with-nginx)
    2. [own server with apache](#own-server-with-apache)
    3. [heroku](#heroku)
    4. [other](#other)
5. [Dependencies](#dependencies)

## Introduction

This skeleton can you give a good starting point to create an amazing big application (>O_O)>.

It contains:

* Root Application (Express)
* Sub Modules (Each an express application)
* Each Sub Module his own features like:
    * api (JWT Authentication - CRUD Resources etc.)
    * admin (Angular Application - modularized structure etc)
    * frontend (Simple Server Side Rendering - like a CMS etc)
    
But it is only first skeleton!

**upcomming in another repo**

* splitted application system to seperate areas in:
    * standalone api with ClientAuth (accessToken), JWT and OAuth2 authentication
    * node package library that can be used to communicate with api
    * angular services collection to communicate with api
    * simple app which communicates with api (ClientAuth)
    * simple web application which communicates with the api (OAuth2)
    * single page application (powered with mincer asset pipeline) which communicates with the api (JWT)
    * simple ionic mobile application which communicates with the api (jwt)

## Getting started
### download Source
### change application name
### setup development environment
### run tests
### start application

## Application Documentation
### directory structure
### application modules
### database models
### asset pipeline

## Contrinous Integration
### recommendations

### badges

#### Travis
[![travis status](https://travis-ci.org/naxmefy/node-express-application-skeleton.svg?branch=master)](https://travis-ci.org/naxmefy/node-express-application-skeleton)

#### Wercker
[![wercker status](https://app.wercker.com/status/b7db6a5c47ec9ae4a3bd83fc50ae60de/m "wercker status")](https://app.wercker.com/project/bykey/b7db6a5c47ec9ae4a3bd83fc50ae60de)

#### Shippable

**shippable api**

[![shippable status](https://api.shippable.com/projects/56c4a2ef1895ca4474744564/badge/master)](https://app.shippable.com/builds/56c4a2ef1895ca4474744564)

**shields.io**

[![shippable status](https://img.shields.io/shippable/56c4a2ef1895ca4474744564.svg)](https://app.shippable.com/builds/56c4a2ef1895ca4474744564)

### test driven development
### working in big teams

## Deployment
### own server with nginx
### own server with apache
### heroku
### other

## Dependencies
