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

**upcomming in another repos**

* splitted application system to seperate areas in:
    * standalone api with ClientAuth (accessToken), JWT and OAuth2 authentication
    * node package library that can be used to communicate with api
    * angular services collection to communicate with api
    * simple app which communicates with api (ClientAuth)
    * simple web application which communicates with the api (OAuth2)
    * single page application (powered with mincer asset pipeline) which communicates with the api (JWT)
    * simple ionic mobile application which communicates with the api (jwt)
    * simple ionic mobile application which communicates with the api (oauth2)
    
### What is included here?

We got:

* express applications
* mongoose database with models
* mincer asset pipeline (supports nearly every asset format, building, plugins, etc like Sass, Less, PostCSS, Coffee, Babel, etc
* LiveReload Support for Development
* Nodemon Support for Development
* Example module for server side rendered views (for cms -> SEO reasons etc)
* example module for an api (simple, dry, crud etc)
* I18N Support on Server Side (for error messages, server side renderes views, responses, etc)
* Angular Application
* Angular App with nice modularized structure
* Angular App with I18N Support
* Angular App with UI Router - nice for multiple nested views etc.
* **not implemented yet** Unit Tests for server application parts
* **not implemented yet** Integation Tests for server applications parts and requests
* **not implemented yet** Unit- / Integration Tests for assets
* **not implemented yet** E2E Tests for Frontend Applications / -Views
* **not implemented yet** Passport Authentication for Frontend (Works with Session and support social auth services like facebook etc)
* **not implemented yet** API JWT Authentication
* **not implemented yet** Angular App Authentication with API via JWT
* **not implemented yet** User Permissions (simple acl)
* **not implemented yet** payment strategies
* **not implemented yet** file upload and handling with local file store, S3 and cloudinary
* **not implemented yet** Logging and ErrorHandling with Sentry and/or Papertrail
* **not implemented yet** Action History per Model per User
* **not implemented yet** Mongoose Migrations
* **not implemented yet** Clustering

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
