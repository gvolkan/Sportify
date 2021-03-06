# Sportify
> Make better decisions for your fantasy football league with Sportify, a dynamic sports analysis platform.

### Team
- Carlos Espinal
- Roy Eun
- Duke Pham
- Jay Arella

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
1. [Contributing](#contributing)
1. [Architecture](#architecture)
1. [API](#api)
1. [Deployment](#deployment)
1. [Testing](#testing)

## Usage
Login to your fantasy football yahoo account and check your team's projections, compare player statistics, and create your own unique statistics.

From within the root directory
```sh
$ npm start
```

## Requirements
- Node 6.3.1
- Express
- Postgresql 9.5
  - Sequelize ORM
- React
- Redux
- Axios

## Development
### Installing Dependencies
From within the root directory:
```sh
$ npm install
```

## Contributing + Github Workflow
See [github.md](github.md) for contribution and github workflow guidelines.

## Architecture
### High Level Architecture
![](http://i.imgur.com/jtR97Rk.png)
### Database Schema
Database in Postgres, using Sequelize ORM
![](http://i.imgur.com/sHmO9RW.png)

## API
##### Public End Points
|Request|URL|Response|
|---|---|---|
|Log-in|/auth/yahoo|   |
|Log-out|/logout|   |
|Get Leagues|/leagues|leaguesObj|
|Get Roster|/roster/:league_key|rosterArray|
|Get Tweets|/api/getTweets|tweetsArray|
|Get Players Tweets|/api/getPlayersTweets|playerTweetsArray|
|Get All Players|/api/getAllPlayers|playersArray|
|Get Games Schedule|/api/getGamesSchedule|gamesArray
|Get Players By Parameters|/api/getPlayersByParams|playersArray|
|Get Players By IDs|/api/getPlayersByIds|playersArray|
|Get Players By Name|/api/getPlayersByName|playersArray|
|Get Projected Vs. Actual|/api/getProjectedVsActual|playersArray

## Deployment
This has been deployed onto AWS using Docker containers.

## Testing
From within the root directory:
```sh
$ npm test
```
